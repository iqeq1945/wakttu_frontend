import { useState } from 'react';

import useInput from '@/hooks/useInput';
import { TemporaryLayout, AuthForm, AuthInput, AuthButton } from '@/components/index';

interface InputProps {
  id: string;
  pw: string;
  confirmPw: string;
  nickname: string;
}

const Auth = () => {
  const [toggleButton, setToggleButton] = useState('로그인하기');

  const handleToggleButton = () => {
    setToggleButton((current) => (current === '로그인하기' ? '회원가입하기' : '로그인하기'));
  };

  const { inputs, onInputChange } = useInput<InputProps>({
    id: '',
    pw: '',
    confirmPw: '',
    nickname: '',
  });

  const { id, pw, confirmPw, nickname } = inputs;

  return (
    <TemporaryLayout>
      {toggleButton === '로그인하기' ? (
        <AuthForm>
          <AuthInput
            type="text"
            placeholder="아이디"
            name="id"
            value={id}
            onChange={onInputChange}
          />
          <AuthInput
            type="text"
            placeholder="닉네임"
            name="nickname"
            value={nickname}
            onChange={onInputChange}
          />
          <AuthInput
            type="password"
            placeholder="비밀번호"
            name="pw"
            value={pw}
            onChange={onInputChange}
          />
          <AuthInput
            type="password"
            placeholder="비밀번호 확인"
            name="confirmPw"
            value={confirmPw}
            onChange={onInputChange}
          />
          <AuthButton />
        </AuthForm>
      ) : (
        <AuthForm formTitle="로그인">
          <AuthInput
            type="text"
            placeholder="아이디"
            name="id"
            value={id}
            onChange={onInputChange}
          />
          <AuthInput
            type="password"
            placeholder="비밀번호"
            name="pw"
            value={pw}
            onChange={onInputChange}
          />
          <AuthButton buttonText="로그인" />
        </AuthForm>
      )}
      <button onClick={handleToggleButton}>{toggleButton}</button>
    </TemporaryLayout>
  );
};

export default Auth;
