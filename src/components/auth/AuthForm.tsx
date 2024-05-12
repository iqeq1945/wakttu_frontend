import { FormEvent } from 'react';
import authForm from '@/styles/modules/authForm.module.css';

interface Props {
  children: React.ReactNode;
  formTitle?: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

const AuthForm = ({ children, formTitle = '회원가입', onSubmit }: Props) => {
  return (
    <div className={authForm.formContainer}>
      <h1>{formTitle}</h1>
      <form className={authForm.formSection} onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
};

export default AuthForm;
