import { useState } from 'react';

import SignUp from '@/containers/auth/SignUp';
import SignIn from '@/containers/auth/SignIn';

const Auth = () => {
  const [isToggle, setToggle] = useState(false);

  return <>{isToggle === false ? <SignUp /> : <SignIn />}</>;
};

export default Auth;
