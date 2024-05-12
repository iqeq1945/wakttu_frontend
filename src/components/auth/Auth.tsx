import { useState } from 'react';
import { TemporaryLayout, SignUp, SignIn } from '@/components/index';

const Auth = () => {
  const [toggleButton, setToggleButton] = useState('로그인하기');

  const handleToggleButton = () => {
    setToggleButton((current) => (current === '로그인하기' ? '회원가입하기' : '로그인하기'));
  };

  return (
    <TemporaryLayout>
      {toggleButton === '로그인하기' ? <SignUp /> : <SignIn />}
      <button onClick={handleToggleButton}>{toggleButton}</button>
    </TemporaryLayout>
  );
};

export default Auth;
