import { useState } from 'react';

import useInput from '@/hooks/useInput';
import { TemporaryLayout, SignUp, SignIn } from '@/components/index';

interface InputProps {
  id: string;
  pw: string;
  confirmPw: string;
  nickname: string;
}

const Auth = () => {
  const [toggleButton, setToggleButton] = useState('로그인하기');

  const { inputs, onInputChange } = useInput<InputProps>({
    id: '',
    pw: '',
    confirmPw: '',
    nickname: '',
  });

  const { id, pw, confirmPw, nickname } = inputs;

  const handleToggleButton = () => {
    setToggleButton((current) => (current === '로그인하기' ? '회원가입하기' : '로그인하기'));
  };

  return (
    <TemporaryLayout>
      {toggleButton === '로그인하기' ? (
        <SignUp
          id={id}
          pw={pw}
          confirmPw={confirmPw}
          nickname={nickname}
          onInputChange={onInputChange}
        />
      ) : (
        <SignIn id={id} pw={pw} onInputChange={onInputChange} />
      )}
      <button onClick={handleToggleButton}>{toggleButton}</button>
    </TemporaryLayout>
  );
};

export default Auth;
