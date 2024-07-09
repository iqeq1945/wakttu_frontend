import axios from 'axios';
import { useState, FormEvent } from 'react';

import useInput from '@/hooks/useInput';
import { API_URL } from '@/services/api';
import { onError } from '@/containers/auth/checkAuth';
import { AuthForm, AuthInput } from '@/components/index';

interface ErrorProps {
  errorId: string;
  errorPw: string;
  errorConfirmPw: string;
  errorNickname: string;
}

interface InputProps {
  id: string;
  pw: string;
  confirmPw: string;
  nickname: string;
}

const SignUp = () => {
  const [errors, setErrors] = useState<ErrorProps>();

  const { inputs, onInputChange } = useInput<InputProps>({
    id: '',
    pw: '',
    confirmPw: '',
    nickname: '',
  });

  const { id, pw, confirmPw, nickname } = inputs;

  const isSameIdValid = async (userId: string) => {
    let sameId = true;

    try {
      const { data } = await axios.post(`${API_URL}/auth/check/id`, {
        id: userId,
      });
      sameId = data.success;
    } catch (error) {
      if (axios.isAxiosError(error)) sameId = error?.response?.data.success;
    }

    return sameId;
  };

  const isSameNicknameValid = async (nickname: string) => {
    let sameNickname = true;

    try {
      const { data } = await axios.post(`${API_URL}/auth/check/name`, {
        name: nickname,
      });
      sameNickname = data.success;
    } catch (error) {
      if (axios.isAxiosError(error))
        sameNickname = error.response?.data.success;
    }

    return sameNickname;
  };

  const onSignUpSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sameIdValid = await isSameIdValid(id);
    const sameNicknameValid = await isSameNicknameValid(nickname);

    const errorMessage = onError({
      id,
      sameId: sameIdValid,
      pw,
      confirmPw,
      nickname,
      sameNickname: sameNicknameValid,
    });

    setErrors(errorMessage);

    if (Object.values(errorMessage).some((error) => error && error !== ''))
      return;

    const userInfo = {
      id: id,
      name: nickname,
      password: pw,
    };

    if (Object.values(userInfo).every((value) => value !== '')) {
      await axios
        .post(`${API_URL}/auth/signup`, userInfo)
        .then((response) => {
          if (response.status === 201) alert('회원가입이 완료되었습니다.');
        })
        .catch((error) =>
          console.error(
            `회원가입을 완료할 수 없습니다. ${error.response.data.message}`
          )
        );
    }
  };

  return (
    <AuthForm formTitle="회원가입" onSubmit={onSignUpSubmit}>
      <AuthInput
        label="아이디"
        desc="특수문자, 한글 제외 5~12자 내"
        type="text"
        placeholder="아이디 입력"
        name="id"
        value={id}
        onChange={onInputChange}
      />
      {errors && <span>{errors.errorId}</span>}
      <AuthInput
        label="닉네임"
        desc="특수문자 제외 2~8자 내"
        type="text"
        placeholder="닉네임 입력"
        name="nickname"
        value={nickname}
        onChange={onInputChange}
      />
      {errors && <span>{errors.errorNickname}</span>}
      <AuthInput
        label="비밀번호"
        type="password"
        placeholder="비밀번호 입력"
        name="pw"
        value={pw}
        onChange={onInputChange}
      />
      {errors && <span>{errors.errorPw}</span>}
      <AuthInput
        type="password"
        placeholder="비밀번호 재입력"
        name="confirmPw"
        value={confirmPw}
        onChange={onInputChange}
      />
      {errors && <span>{errors.errorConfirmPw}</span>}
    </AuthForm>
  );
};

export default SignUp;
