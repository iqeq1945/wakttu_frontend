import styled from 'styled-components';
import { COLORS, FONT_SIZES } from '../theme';

const DROM_SHADOW = '0px 1px 10px 0px rgba(0, 0, 0, 0.15)';

export const CKung = styled.div`
  display: flex;
  height: 32rem;
  padding: 0.625rem 2.5rem;
  justify-content: center;
  align-items: center;
`;

export const Left = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 28.625rem;
  height: 25.0625rem;
`;

export const Right = styled.div`
  position: relative;
  display: flex;
  width: 33.25rem;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0.9375rem 3.125rem;
  flex-wrap: wrap;
`;

export const Speaker = styled.img<{ reverse: boolean }>`
  position: absolute;
  top: 0;
  ${({ reverse }) => (reverse ? 'right:0' : 'left:0')};
  width: 3.5625rem;
  height: 3.875rem;
  flex-shrink: 0;
`;

export const Tv = styled.div`
  width: 22.35513rem;
  height: 21.875rem;
  flex-shrink: 0;

  background-image: url('/assets/game/tv.svg');
  background-size: cover;
`;

export const Board = styled.div`
  display: flex;
  width: 46rem;
  height: 24.5625rem;
  padding: 1.3125rem 0.75rem;
  flex-direction: column;
  align-items: center;
  gap: 0.875rem;

  background-image: url('/assets/game/board.svg');
  background-size: cover;
`;

export const Info = styled.div`
  display: flex;
  width: 46rem;
  height: 5.125rem;
  padding: 0.4375rem 0rem;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;

export const Object = styled.div`
  display: flex;
  width: 7.375rem;
  height: 2.8125rem;
  padding: 0.125rem 0.625rem;
  margin-left: 3.84rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  flex-shrink: 0;

  border-radius: 0.3125rem;
  background: linear-gradient(0deg, #a4ff95 0%, #edff7e 100%);
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
  height: 3rem;
  padding: 0rem 0.0625rem;
  align-items: center;
  gap: 0.3125rem;
  flex-shrink: 0;

  border-bottom: 1px solid #fff;
`;

export const RoundText = styled.h3<{ target?: boolean }>`
  color: ${({ target }) => (target ? '#ffffff' : '#ffffff99')};
  text-align: center;

  font-family: 'WantedSans-SemiBold';
`;

export const ChainText = styled.h4`
  color: rgba(155, 255, 119, 0.8);
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-right: 3.84rem;
  font-family: 'WantedSans-SemiBold';
`;

export const Main = styled.div`
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

  border-radius: 12.5rem;
  background: #a377ff;
`;

export const RightDesc = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 11.75rem;

  overflow: hidden;
  color: ${COLORS.bg};
  text-overflow: ellipsis;

  font-family: 'WantedSans-Medium';
  font-size: ${FONT_SIZES.caption};
`;

export const Turn = styled.div`
  position: relative;

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
  position: relative;
  width: 100%;
  height: 2.2rem;
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
`;

export const TypingText = styled.span`
  color: ${COLORS.bg};
  text-align: center;

  font-family: 'WantedSans-SemiBold';
  font-size: ${FONT_SIZES['subtitle-1']};
`;

export const Frame = styled.img`
  width: 6.75rem;
  height: 4.9375rem;
  flex-shrink: 0;
`;

export const CPost = styled.div`
  display: flex;
  width: 33.25rem;
  padding: 0.8125rem 0.9375rem 0.5rem 0.9375rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 0.3125rem;
  border: 1px solid #7a2e04;
  background: #b25a08;
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 31.375rem;
  height: 17rem;
  flex-shrink: 0;

  background-image: url('/assets/game/post.svg');
  fill: linear-gradient(180deg, #00c944 -1.1%, #006322 98.9%);
`;

export const CPostTitle = styled.div`
  display: flex;
  width: 31.375rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;

export const PostTitle = styled.h6`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.3125rem;
  height: 1.8125rem;
  flex-shrink: 0;

  color: ${COLORS.text};

  font-family: 'WantedSans-Medium';

  border-radius: 0.3125rem;
  background: #fb5e3c;
`;

export const CTimer = styled.div`
  display: flex;
  width: 34.25rem;
  height: 3.5rem;
  padding: 0.375rem 1.5625rem;
  flex-direction: column;
  align-items: center;
`;

export const TimerItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  color: ${COLORS.bg};
  text-align: center;

  font-family: 'WantedSans-Medium';
  font-size: ${FONT_SIZES['body-2']};
`;

export const RemainText = styled.span<{ color: boolean }>`
  color: ${({ color }) => (color ? '#FF4B4B' : '#FCFF62')};
  text-align: right;

  font-family: 'WantedSans-Medium';
  font-size: ${FONT_SIZES['body-2']};
`;

export const TimerBar = styled.div`
  display: flex;
  width: 19.25rem;
  height: 0.625rem;

  align-items: center;

  border-radius: 6.25rem;
  background: #dbdbdb;

  box-shadow: ${DROM_SHADOW};
`;

export const BTimerBar = styled(TimerBar)`
  background: #605774;
`;

export const GaugeBar = styled.div<{
  gauge: number;
  pause: boolean;
  color: boolean;
}>`
  width: 100%;
  height: 100%;
  border-radius: 6.25rem;
  background: ${({ color }) => (color ? '#FF4B4B' : '#FCFF62')}${COLORS.pupple};

  transition: ${({ gauge, pause }) => {
    return pause ? `transform ${gauge}ms linear 0.2s` : '';
  }};
  transform: scaleX(${({ pause }) => (pause ? 0 : 1)});
  transform-origin: left;
`;
