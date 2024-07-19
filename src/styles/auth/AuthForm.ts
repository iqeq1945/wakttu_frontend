import styled from "styled-components";
import { COLORS, FONT_SIZES } from "../theme";

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
`;

const Modal = styled.div`
  display: flex;
  padding: 3rem 2.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 1rem;
  background: ${COLORS.bg};
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const FormName = styled.h3`
  color: ${COLORS.text};
  font-family: WantedSans-SemiBold;
  font-style: normal;
  line-height: normal;
`;

const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.125rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;

  position: relative;
`;

const FormLabel = styled.span`
  color: ${COLORS.text};
  font-family: "WantedSans-Medium";
  font-size: ${FONT_SIZES["body-2"]};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  & > span {
    font-size: ${FONT_SIZES.caption};
    color: ${COLORS["gray-2"]};
  }
`;

const FormItem = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 19.375rem;
  height: 2.6875rem;
  padding: 0.625rem 0.75rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${COLORS["gray-4"]};

  gap: 0.625rem;

  & > input {
    padding: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    outline: none;
    border: none;
    font-family: "WantedSans-Medium";
    font-size: ${FONT_SIZES["body-1"]};
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 1rem;
    padding: 0.375rem 0.625rem;

    border: none;
    border-radius: 0.5rem;
    background: ${COLORS.primary};

    cursor: pointer;

    color: ${COLORS.bg};
    font-family: "WantedSans-Medium";
    font-size: ${FONT_SIZES["body-2"]};
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const WrapButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const SubmitButton = styled.button`
  display: flex;
  width: 16.875rem;
  padding: 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 0.5rem;
  border: none;
  background: ${COLORS.primary};

  cursor: pointer;

  color: ${COLORS.bg};
  text-overflow: ellipsis;

  font-family: "WantedSans-SemiBold";
  font-size: ${FONT_SIZES["subtitle-1"]};
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &:hover {
    background: ${COLORS["primary-hov"]};
  }
`;

const SnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

const SnsText = styled(FormLabel)`
  color: ${COLORS["gray-2"]};
`;

const SnsIcon = styled.img`
  width: 2.625rem;
  height: 2.625rem;
  cursor: pointer;
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem;
`;

const LinkText = styled(SnsText)`
  color: ${COLORS.primary};
  text-decoration: underline;
  cursor: pointer;
`;

export {
  ModalContainer,
  Modal,
  FormContainer,
  FormName,
  FormSection,
  InputContainer,
  InputSection,
  FormLabel,
  FormItem,
  WrapButton,
  SubmitContainer,
  SubmitButton,
  SnsContainer,
  SnsIcon,
  SnsText,
  FormFooter,
  LinkText,
};
