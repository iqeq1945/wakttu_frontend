import { useState } from 'react';

import SignUp from '@/containers/auth/SignUp';
import SignIn from '@/containers/auth/SignIn';

const Auth = ({ ...props }) => {
  const [isToggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!isToggle);
  };
  return (
    <>
      {isToggle ? (
        <SignUp onToggle={onToggle} />
      ) : (
        <SignIn onToggle={onToggle} />
      )}
    </>
  );
};

export default Auth;
