import styled from "styled-components";
import { COLORS } from "@/styles/theme";

const Container = styled.div`
  position: absolute;
  z-index: 10;
  
`;

const ContainerContent = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;

  width: 65.875rem;
  height: 48.625rem;
  padding: 2rem;

  gap: 2rem;

  border-radius: 1rem;
  border: 2px solid ${COLORS['gray-4']};
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 25rem;
  height: 100%;
  padding: 2rem;

  gap: 0.9375rem;

  border-radius: 1rem;
  border: 1px solid ${COLORS['gray-4']};
  box-sizing: border-box;
`;

const RightWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  overflow-y: scroll;

  width: 100%;
  height: 100%;

  border-radius: 1rem;
  border: 1px solid ${COLORS['gray-4']};
`;

export {
  Container,
  ContainerContent,
  LeftWrapper,
  RightWrapper
};