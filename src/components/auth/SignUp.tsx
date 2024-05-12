import axios from 'axios';
import { useState, FormEvent, ChangeEvent } from 'react';

import { API_URL } from '@/services/api';
import onError from '@/containers/auth/checkAuth';
import { AuthForm, AuthInput, AuthButton } from '@/components/index';

interface ErrorProps {
  errorId: string;
  errorPw: string;
  errorConfirmPw: string;
  errorNickname: string;
}

interface SignUpProps {
  id: string;
  pw: string;
  confirmPw: string;
  nickname: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SignUp = ({ id, pw, confirmPw, nickname, onInputChange }: SignUpProps) => {
  const [errors, setErrors] = useState<ErrorProps>();

  const isSameIdValid = async (userId: string) => {
    let sameId = true;

    try {
      const { data } = await axios.post(`${API_URL}/auth/check/id`, { id: userId });
      sameId = data.success;
    } catch (error) {
      if (axios.isAxiosError(error)) sameId = error?.response?.data.success;
    }

    return sameId;
  };

  const isSameNicknameValid = async (nickname: string) => {
    let sameNickname = true;

    try {
      const { data } = await axios.post(`${API_URL}/auth/check/name`, { name: nickname });
      sameNickname = data.success;
    } catch (error) {
      if (axios.isAxiosError(error)) sameNickname = error?.response?.data.success;
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
  };

  return (
    <AuthForm onSubmit={onSignUpSubmit}>
      <AuthInput type="text" placeholder="아이디" name="id" value={id} onChange={onInputChange} />
      {errors && <span>{errors.errorId}</span>}
      <AuthInput
        type="text"
        placeholder="닉네임"
        name="nickname"
        value={nickname}
        onChange={onInputChange}
      />
      {errors && <span>{errors.errorNickname}</span>}
      <AuthInput
        type="password"
        placeholder="비밀번호"
        name="pw"
        value={pw}
        onChange={onInputChange}
      />
      {errors && <span>{errors.errorPw}</span>}
      <AuthInput
        type="password"
        placeholder="비밀번호 확인"
        name="confirmPw"
        value={confirmPw}
        onChange={onInputChange}
      />
      {errors && <span>{errors.errorConfirmPw}</span>}
      <AuthButton />
    </AuthForm>
  );
};

export default SignUp;
