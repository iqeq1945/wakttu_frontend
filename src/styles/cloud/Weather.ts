import styled, { keyframes } from 'styled-components';
import { COLORS } from '../theme';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1002;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  width: 30rem;
  padding: 1rem 0rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  overflow: hidden;

  border-radius: 1rem;
  background: #60d4d6;
`;

export const Title = styled.h3`
  color: ${COLORS.text};
  text-align: center;

  font-family: 'Wanted Sans Variable', sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26.25rem;
  height: 15.75rem;

  border-radius: 1rem;
  background: ${COLORS.bg};
`;

export const Weather = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;
export const WeatherImg = styled.img`
  width: 11.25rem;
  height: 8.99994rem;
  flex-shrink: 0;
`;

export const WeatherText = styled.h3`
  color: ${COLORS.text};
  text-align: center;

  font-family: 'Wanted Sans Variable', sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
