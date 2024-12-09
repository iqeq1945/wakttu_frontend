import styled, { keyframes } from 'styled-components';
import { COLORS } from '../theme';

const floatAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0.5rem, -0.5rem); /* 약간 위로 이동 */
  }
  100% {
    transform: translate(0, 0);
  }
`;

export const Game = styled.div`
  position: relative;
  width: 82rem;
  height: 32.6875rem;
`;

export const Cloud = styled.div<{
  x: string;
  y: string;
  duration: string;
  delay: string;
  clear: boolean;
}>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  width: 10.875rem;
  height: 7.4375rem;
  flex-shrink: 0;
  background-image: url('/assets/game/cloud.svg');
  background-size: cover;
  left: ${(props) => props.x};
  top: ${(props) => props.y};
  animation: ${floatAnimation} ${(props) => props.duration} ease-in-out infinite;
  animation-delay: ${(props) => props.delay};

  opacity: ${(props) => (!props.clear ? 1 : 0)};
`;

export const CloudText = styled.h4`
  max-width: 9.5rem;
  color: ${COLORS.text};
  text-align: center;

  font-family: 'Wanted Sans Variable', 'Wanted Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
