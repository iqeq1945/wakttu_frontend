import styled from "styled-components";
import { COLORS } from "@/styles/theme";

const Container = styled.div`
  overflow: hidden;
  position: absolute;
  top: 9.4375rem;
  left: 50%;
  z-index: 10;

  transform: translateX(-50%);
`;

const ContainerContent = styled.div`
  display: flex;
  
  width: 65.875rem;
  height: 48.625rem;
  padding: 2rem 2rem 0 2rem;
  gap: 2rem;

  border-radius: 1rem;
  border: 2px solid ${COLORS['gray-4']};
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 25rem;
  padding: 2rem;
  margin-bottom: 2rem;
  gap: 0.9375rem;

  border-radius: 1rem;
  border: 1px solid ${COLORS['gray-4']};
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  
  width: 35.125rem;
  gap: 2rem;
`;

export {
  Container,
  ContainerContent,
  LeftWrapper,
  RightWrapper
};