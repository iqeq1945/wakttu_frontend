import { FormEvent } from 'react';
import {
  FormContainer,
  FormName,
  FormSection,
  Modal,
  InputContainer,
  SubmitContainer,
  WrapButton,
  SubmitButton,
  SnsContainer,
  SnsText,
  SnsIcon,
  FormFooter,
  LinkText,
  ModalContainer,
} from '@/styles/auth/AuthForm';

interface Props {
  children: React.ReactNode;
  formTitle?: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

const AuthForm = ({ children, formTitle = '로그인', onSubmit }: Props) => {
  return (
    <ModalContainer>
      <Modal>
        <FormContainer>
          <FormSection onSubmit={onSubmit}>
            <FormName>{formTitle}</FormName>
            <InputContainer>{children}</InputContainer>
            <WrapButton>
              <SubmitContainer>
                <SubmitButton>{formTitle}</SubmitButton>
              </SubmitContainer>
              <SnsContainer>
                <SnsText>sns로 간편하게 {formTitle}</SnsText>
                <SnsIcon src="/assets/wakgames-icon.svg" />
              </SnsContainer>
            </WrapButton>
            <FormFooter>
              <SnsText>
                {formTitle === '로그인'
                  ? '가입 하시겠어요?'
                  : '이미 가입하셨나요?'}
              </SnsText>
              <LinkText>
                {formTitle === '로그인' ? '회원가입' : '로그인'}
              </LinkText>
            </FormFooter>
          </FormSection>
        </FormContainer>
      </Modal>
    </ModalContainer>
  );
};

export default AuthForm;
