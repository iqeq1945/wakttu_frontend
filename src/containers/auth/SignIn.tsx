import axios from 'axios';
import { FormEvent, MouseEvent, useState } from 'react';

import useInput from '@/hooks/useInput';
import { API_URL, SOCKET } from '@/services/api';
import { ERROR_MESSAGE } from '@/constants/auth';
import { AuthForm, AuthInput } from '@/components/index';
import { isExistError, isIdValidError } from '@/containers/auth/checkAuth';

import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setUserId } from '@/redux/user/userSlice';
import { useCookies } from 'react-cookie';
import { closeModal } from '@/redux/modal/modalSlice';

interface InputProps {
  id: string;
  pw: string;
}

interface ErrorProps {
  message: string;
  type: string;
}

interface Props {
  onToggle: (e: MouseEvent<HTMLElement>) => void;
}

const SignIn = ({ onToggle }: Props) => {
  const [errors, setErrors] = useState<ErrorProps>();

  const { inputs, onInputChange } = useInput<InputProps>({
    id: '',
    pw: '',
  });

  const { id, pw } = inputs;

  const isIdValid = async (userId: string) => {
    let sameId = true;

    try {
      const { data } = await axios.post(
        `${API_URL}/auth/check/id`,
        {
          id: userId,
        },
        { withCredentials: true }
      );
      sameId = data.success;
    } catch (error) {
      if (axios.isAxiosError(error)) sameId = error.response?.data.success;
    }
    return sameId;
  };

  const router = useRouter();
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(['ACCOUNT_TOKEN']);

  const onSignInSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const idValid = await isIdValid(id);

    if (isExistError(id, pw)) {
      setErrors(isExistError(id, pw));
      return;
    }

    if (isIdValidError(idValid)) {
      setErrors(isIdValidError(idValid));
      return;
    }

    const userInfo = {
      email: id,
      password: pw,
    };
    await axios
      .post(`${API_URL}/auth/login`, userInfo, { withCredentials: true })
      .then((response) => {
        if (response.status === 201) {
          setErrors({ message: '', type: 'success' });
          dispatch(setUserId(response.data.id));
          dispatch(closeModal());
        }
      })
      .catch((error) => {
        setErrors({
          message: ERROR_MESSAGE.signInError,
          type: 'pw',
        });

        console.error(`로그인을 완료할 수 없습니다. ${error}`);
      });
    const data = await axios
      .get(`${API_URL}/test`, { withCredentials: true })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        setErrors({ message: ERROR_MESSAGE.signInError, type: 'undefined' });
        console.error(`알수없는 이유로 정보 가져오기 실패, ${error}`);
      });
    console.log(data);
  };
  return (
    <AuthForm formTitle="로그인" onSubmit={onSignInSubmit} onToggle={onToggle}>
      <AuthInput
        label="아이디"
        type="text"
        placeholder="아이디 입력"
        name="id"
        value={id}
        onChange={onInputChange}
      />
      <AuthInput
        label="비밀번호"
        type="password"
        placeholder="비밀번호 입력"
        name="pw"
        value={pw}
        onChange={onInputChange}
      />
      {errors && <p>{errors.message}</p>}
    </AuthForm>
  );
};

export default SignIn;
