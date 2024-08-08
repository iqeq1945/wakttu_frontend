import styled from "styled-components";
import { COLORS } from "@/styles/theme";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 65.875rem;
  padding: 2rem;

  border-radius: 1rem;
  border: 2px solid ${COLORS['gray-4']};

  z-index: 10;
  overflow: hidden;
`;

const ContainerContent = styled.div`
  display: flex;
  gap: 2rem;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 25rem;
  padding: 2rem;

  gap: 0.9375rem;

  border-radius: 1rem;
  border: 1px solid ${COLORS['gray-4']};
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;

  width: 34rem;
  height: 46.625rem;

  border-radius: 1rem;
  border: 1px solid ${COLORS['gray-4']};
`;

export {
  Container,
  ContainerContent,
  LeftWrapper,
  RightWrapper
};