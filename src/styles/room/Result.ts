import styled from 'styled-components';
import { COLORS } from '../theme';

export const Container = styled.div`
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

export const CModal = styled.div`
  display: flex;
  padding: 3rem 2.5rem;
  flex-direction: column;
  gap: 0.625rem;

  border-radius: 1rem;
  background: ${COLORS.bg};
`;

export const ResultTitle = styled.h3`
  font-family: 'Wanted Sans Variable', 'Wanted Sans', sans-serif;
  font-weight: 600;
`;

export const CResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const Item = styled.div`
  display: flex;
  gap: 0.2rem;
`;

export const Confirm = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  padding: 1rem;
`;
