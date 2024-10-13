import styled, { keyframes } from 'styled-components';
import { COLORS, FONT_SIZES } from '../theme';

const keyframe = keyframes`
0%{
    transform: translateY(0);
    opacity:1;
}
100%{
    transform: translateY(-5rem);
    opacity:0;
}
`;

export const CAcheive = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  width: 21.75rem;
  padding: 0.5rem 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem;

  border-left: 8px solid #00d068;
  background: linear-gradient(
      90deg,
      rgba(0, 208, 104, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    #000;

  animation: ${keyframe} 1s linear infinite;
`;

export const CTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const Trophy = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const Title = styled.h6`
  color: ${COLORS.bg};

  font-family: 'Wanted Sans Variable', 'Wanted Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;

export const Badge = styled.img`
  width: 4rem;
  height: 4rem;

  border-radius: 22.5rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.625rem;
`;

export const Name = styled.span`
  color: ${COLORS.bg};

  font-family: 'Wanted Sans Variable', 'Wanted Sans', sans-serif;
  font-size: ${FONT_SIZES['subtitle-1']};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Desc = styled.span`
  width: 13.6875rem;

  color: ${COLORS.bg};

  font-family: 'Wanted Sans Variable', 'Wanted Sans', sans-serif;
  font-size: ${FONT_SIZES.caption};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
