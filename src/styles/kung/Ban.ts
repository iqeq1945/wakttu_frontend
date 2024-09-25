import { keyframes, styled } from 'styled-components';
import { COLORS, FONT_SIZES } from '../theme';
import { R2_URL } from '@/services/api';
const DROM_SHADOW = '0px 1px 10px 0px rgba(0, 0, 0, 0.15)';

const GAUGE = keyframes`
  0% {
    width: 100%;
  }
  100%{
    width: 0%;
  }
`;

export const Container = styled.div<{ pause: boolean }>`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 32rem;
  padding: 8.875rem 39.8125rem 8.8125rem 39.8125rem;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;

  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: ${({ pause }) => (pause ? 1000 : -1000)};

  opacity: ${({ pause }) => (pause ? 1 : 0)};
`;

export const Modal = styled.div`
  display: flex;
  width: 40.375rem;
  height: 17.8125rem;
  padding: 1.9375rem 2.4375rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.875rem;

  background: url(${R2_URL} + '/assets/game/white-board.svg');
  background-size: cover;
`;

export const ModalTitle = styled.h3`
  color: ${COLORS.text};
  text-align: center;

  font-family: 'Wanted Sans Variable', 'Wanted Sans', sans-serif;
  font-weight: 600;
`;

export const BanText = styled.h2`
  height: 3rem;
  color: ${COLORS.text};
  text-align: center;

  font-family: 'Wanted Sans Variable', 'Wanted Sans', sans-serif;
  font-weight: 600;
`;

export const CTimer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  gap: 0.69rem;
`;

export const LeftTimer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.3125rem;
`;
export const RightTimer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.3125rem;
`;

export const TimerIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const TimerText = styled.span`
  color: ${COLORS.text};
  text-align: center;

  font-family: 'Wanted Sans Variable', 'Wanted Sans', sans-serif;
  font-weight: 500;
  font-size: ${FONT_SIZES['body-2']};
`;

export const RemainText = styled.span`
  color: #ff4b4b;

  text-align: right;

  font-family: 'Wanted Sans Variable', 'Wanted Sans', sans-serif;
  font-weight: 500;
  font-size: ${FONT_SIZES['body-2']};
`;

export const TimerBar = styled.div`
  display: flex;
  width: 17.0625rem;
  height: 0.625rem;

  align-items: center;

  border-radius: 6.25rem;
  background: ${COLORS['gray-5']};

  box-shadow: ${DROM_SHADOW};
`;

export const GaugeBar = styled.div<{ gauge: number; pause: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 6.25rem;
  background: #ff4b4b;

  transition: ${({ gauge, pause }) => {
    return pause ? `transform ${gauge}ms linear 0.2s` : '';
  }};
  transform: scaleX(${({ pause }) => (pause ? 0 : 1)});
  transform-origin: left;
`;

export const Condition = styled.div`
  display: flex;
  width: 32rem;
  height: 3rem;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  background: ${COLORS.text};
  border-radius: 0.9375rem;

  box-shadow: ${DROM_SHADOW};
`;

export const ConditionText = styled.h3`
  color: ${COLORS.bg};
  text-align: center;
  font-family: 'Wanted Sans Variable', 'Wanted Sans', sans-serif;
  font-weight: 600;
`;
