import authForm from '@/styles/modules/authForm.module.css';

const AuthInput = ({ ...props }) => {
  return <input className={authForm.formItem} {...props} />;
};

export default AuthInput;
