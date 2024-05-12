import { ChangeEvent } from 'react';
import { AuthForm, AuthInput, AuthButton } from '@/components/index';

interface Props {
  id: string;
  pw: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SignIn = ({ id, pw, onInputChange }: Props) => {
  return (
    <AuthForm formTitle="로그인">
      <AuthInput type="text" placeholder="아이디" name="id" value={id} onChange={onInputChange} />
      <AuthInput
        type="password"
        placeholder="비밀번호"
        name="pw"
        value={pw}
        onChange={onInputChange}
      />
      <AuthButton buttonText="로그인" />
    </AuthForm>
  );
};

export default SignIn;
