import styled, { keyframes } from 'styled-components';
import { COLORS, FONT_SIZES } from '../theme';

export const CMain = styled.div`
  display: flex;
  align-items: flex-end;
  width: 111.9375rem;
  height: 21.9375rem;
  flex-shrink: 0;

  margin-top: 5.685rem;
`;

export const Left = styled.img`
  width: 5.625rem;
  flex-shrink: 0;
`;

export const Right = styled.img`
  width: 12.6875rem;
  height: 21.5625rem;
  flex-shrink: 0;
`;

export const Main = styled.div`
  display: flex;
  width: 100%;
  overflow-x: visible;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 1.3125rem;

  flex: 1 0 0;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CTrain = styled.div`
  width: 23.5rem;
  height: 20.1875rem;
  flex-shrink: 0;

  background-image: url('/assets/game/train.svg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CCargo = styled.div`
  width: 19.4375rem;
  height: 15.4375rem;
  flex-shrink: 0;

  background-image: url('/assets/game/cargo.svg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CWord = styled.div`
  display: flex;
  width: 15.875rem;
  height: 6.625rem;
  margin: 6.94rem 2.06rem 6.63rem 5.56rem;
  padding: 1.25rem 0.625rem;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;

  border-radius: 0.625rem;
  background: rgba(255, 255, 255, 0.75);
`;

export const CWordC = styled(CWord)`
  margin: 2.19rem 1.56rem 6.44rem 1.56rem;
`;

export const WordText = styled.h3`
  color: ${COLORS.text};
  text-align: center;

  font-family: 'WantedSans-SemiBold';
`;

export const CDesc = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12.5rem;
  background: ${COLORS.pupple};

  & > span {
    width: 1rem;
    height: 1rem;
    color: ${COLORS.bg};
    text-align: center;
    font-family: 'Wanted Sans';
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Desc = styled.span`
  overflow: hidden;
  color: ${COLORS['gray-2']};
  text-overflow: ellipsis;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-family: 'WantedSans-Medium';
  font-size: ${FONT_SIZES.caption};
`;
