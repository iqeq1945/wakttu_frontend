import styled, { keyframes } from 'styled-components';
import { COLORS } from '../theme';

export const Box = styled.div<{ left?: number; right?: number }>`
  width: 12rem;
  position: absolute;
  bottom: 0;
  ${({ left, right }) => {
    if (left) return `left : ${left}rem`;
    if (right) return `right : ${right}rem`;
  }};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  z-index: 50;
`;

export const Message = styled.div`
  display: inline-flex;
  padding: 0.5rem 1.5rem;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;

  border-radius: 0.5rem;
  background: ${COLORS.bg};

  color: ${COLORS.text};

  font-family: 'Wanted Sans Variable', 'Wanted Sans', sans-serif;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Skin = styled.img<{ width?: number }>`
  width: ${({ width }) => (width ? width + 'rem' : '4.375rem')};
  flex-shrink: 0;
`;
