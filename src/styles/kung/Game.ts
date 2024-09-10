import styled from 'styled-components';
import { COLORS, FONT_SIZES } from '../theme';

export const CKung = styled.div`
  display: flex;
  padding: 0.625rem 2.5rem;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
`;

export const Left = styled.div`
  width: 28.625rem;
  height: 25.0625rem;
`;

export const Right = styled.div`
  position: relative;
  width: 33.25rem;
  height: 25.0625rem;
`;

export const Speaker = styled.img`
  position: absolute;
  width: 3.5625rem;
  height: 3.875rem;
  flex-shrink: 0;
`;

export const Tv = styled.div`
  position: absolute;
  width: 22.35513rem;
  height: 21.875rem;
  flex-shrink: 0;
  background-image: url('/assets/game/tv.svg');
`;

export const Board = styled.div`
  display: flex;
  width: 46rem;
  height: 24.5625rem;
  padding: 1.3125rem 0.75rem;
  flex-direction: column;
  align-items: center;
  gap: 0.875rem;

  background-image: url('/assets/game/tv.svg');
`;

export const Info = styled.div`
  display: flex;
  width: 46rem;
  height: 5.125rem;
  padding: 0.4375rem 0rem;
  justify-content: center;
  align-items: center;
  gap: 4.625rem;
  flex-shrink: 0;
`;

export const Object = styled.div`
  display: flex;
  width: 7.375rem;
  height: 2.8125rem;
  padding: 0.125rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  flex-shrink: 0;
`;

export const Pen = styled.img`
  width: 1.4375rem;
  height: 1.4375rem;
  flex-shrink: 0;
`;

export const ObjectText = styled.h5`
  color: ${COLORS.text};
  text-align: right;

  font-family: 'WantedSans-SemiBold';
`;

export const Round = styled.div`
  display: flex;
  width: 14.25rem;
  height: 3rem;
  padding: 0rem 0.0625rem;
  align-items: center;
  gap: 0.3125rem;
  flex-shrink: 0;

  border-bottom: 1px solid #fff;
`;

export const RoundText = styled.h3<{ target: boolean }>`
  color: ${({ target }) => (target ? '#ffffff' : '#ffffff99')};
  text-align: center;

  font-family: 'WantedSans-SemiBold';
`;

export const ChainText = styled.h4`
  color: rgba(155, 255, 119, 0.8);
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-family: 'Wanted Sans';
`;

export const Kung = styled.div`
  display: flex;
  height: 8.1875rem;
  padding: 0rem 6.9375rem;
  justify-content: center;
  align-items: center;
  gap: 1.1875rem;
  flex-shrink: 0;
`;

export const History = styled.div`
  display: flex;
  width: 13.4375rem;
  height: 8rem;
  padding: 1.25rem 0.625rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5625rem;
  flex-shrink: 0;
`;

export const HistroyText = styled.h3`
  color: ${COLORS.bg};
  text-align: center;

  font-family: 'WantedSans-SemiBold';
`;

export const Desc = styled.div`
  display: flex;
  height: 2.25rem;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem;
  flex-shrink: 0;
`;

export const LeftDesc = styled.div`
  display: flex;
  width: 0.875rem;
  height: 0.875rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  color: ${COLORS.bg};
  text-align: center;
  font-family: 'WantedSans-Medium';
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const RightDesc = styled.div`
  display: flex;
  width: 11.75rem;
  height: 1.75rem;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;
  color: ${COLORS.bg};
  text-overflow: ellipsis;
  white-space: nowrap;

  font-family: 'WantedSans-Medium';
  font-size: ${FONT_SIZES.caption};
`;

export const Turn = styled.div`
  display: flex;
  width: 14.4375rem;
  height: 8rem;
  padding: 1.1875rem 0.1875rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  flex-shrink: 0;
`;

export const Target = styled.h3`
  color: ${COLORS.bg};
  text-align: center;

  font-family: 'WantedSans-SemiBold';
`;

export const Typing = styled.div`
  display: flex;
  height: 1.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  flex-shrink: 0;
  align-self: stretch;
`;

export const Name = styled.span`
  color: #9bff77;
  text-align: center;

  font-family: 'WantedSans-SemiBold';
  font-size: ${FONT_SIZES['subtitle-1']};
  font-weight: 600;
`;

export const TypingText = styled.span`
  color: ${COLORS.bg};
  text-align: center;

  font-family: 'WantedSans-SemiBold';
  font-size: ${FONT_SIZES['subtitle-1']};
  font-weight: 600;
`;
