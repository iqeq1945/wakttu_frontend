import { FormItem, InputSection, FormLabel } from '@/styles/auth/AuthForm';

const AuthInput = ({ ...props }) => {
  return (
    <InputSection>
      <FormLabel>
        {props.label}
        <span>{props.desc}</span>
      </FormLabel>
      <FormItem>
        <input {...props} />
        {props.check && <div>중복 확인</div>}
      </FormItem>
    </InputSection>
  );
};

export default AuthInput;
