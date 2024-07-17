import { FormItem, InputSection, FormLabel } from '@/styles/auth/AuthForm';

const AuthInput = ({ ...props }) => {
  return (
    <InputSection>
      <FormLabel>
        {props.label}
        <span>{props.desc}</span>
      </FormLabel>
      <FormItem>
        <input {...props} onClick={() => ''} />
        {props.onClick && (
          <div onClick={async () => await props.onClick(props.value)}>
            중복 확인
          </div>
        )}
      </FormItem>
    </InputSection>
  );
};

export default AuthInput;
