import styled, { keyframes } from 'styled-components';

const growShrink = keyframes`
  0% {
    transform: scale(0);
  }
  20% {
    transform: scale(1);
  }
  90% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const ImoticonImage = styled.img`
  position: absolute;
  top: -2.8125rem;
  right: -2.8125rem;

  width: 6.25rem;
  height: 6.25rem;

  z-index: 2;

  object-fit: cover;

  transform: scale(0);
  animation: ${growShrink} 2s ease-in-out;
`;
