import { FormItem, InputSection, FormLabel } from '@/styles/auth/AuthForm';

const AuthInput = ({ ...props }) => {
  return (
    <InputSection>
      <FormLabel>
        {props.label}
        <span>{props.desc}</span>
      </FormLabel>
      <FormItem {...props} />
    </InputSection>
  );
};

export default AuthInput;
