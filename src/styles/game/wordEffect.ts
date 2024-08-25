import styled, { keyframes, css } from 'styled-components';

const typingAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fontSizeAnimation = keyframes`
  50% {
    font-size: 36px;
  }
  100% {
    font-size: 24px;
  }
`;

const textDecorationEffect = keyframes`
  50% {
    text-decoration: line-through;
  }
  100% {
    text-decoration: line-through;
  }
`;


const TypingContainer = styled.div`
  display: flex;
  margin: 10px;
`;

const TypingSpan = styled.span<{ isTyped: boolean }>`
  ${({ isTyped }) =>
    isTyped
      ? css`
          animation: ${typingAnimation} 0.1s ease forwards, ${fontSizeAnimation} 0.05s;
        `
      : 'none'};
`;


const TypingWrong = styled.span`
  color: #ff385c;
  animation: ${textDecorationEffect} 0.7s step-end 3 forwards;
`;

export {
  TypingContainer,
  TypingSpan,
  TypingWrong
}