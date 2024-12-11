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

const goldAnimation = keyframes`
0% {
    transform: translate(0, 0);
    opacity:1;
  }
  50% {
    transform: translate(0.5rem, -0.5rem); /* 약간 위로 이동 */
    opacity:0;
  }
  100% {
    transform: translate(0, 0);
    opacity:1;
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
  weather?: string;
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

  z-index: 1;
  transform: ${({ weather }) =>
    weather === 'segu' ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: rotate 1s;
`;

export const BlackCloud = styled(Cloud)`
  background-image: url('/assets/game/black-cloud.svg');

  z-index: 2;
`;

export const GoldCloud = styled(Cloud)`
  background-image: url('/assets/game/gold-cloud.svg');
  animation: ${goldAnimation} 2s ease-in-out infinite;
`;

export const CloudText = styled.h4<{ type?: number }>`
  max-width: 9.5rem;
  color: ${({ type }) => (type === 1 ? COLORS.bg : COLORS.text)};
  text-align: center;

  font-family: 'Wanted Sans Variable', 'Wanted Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Ready = styled.img`
  width: 13.4375rem;
  height: 9.125rem;
  opacity: 0;
`;
