import styled from 'styled-components';
import { COLORS, FONT_SIZES } from '../theme';

const CPlayerList = styled.article`
  display: flex;
  align-items: flex-start;
  align-self: stretch;

  width: 62rem;
  padding: 2rem;
  border-radius: 1rem;
  border: 2px solid ${COLORS['gray-4']};
`;

const WrapPlayerList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  flex-wrap: wrap;

  width: 100%;
  gap: 0.875rem;
`;

const CPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  width: 23.8%;
`;

const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  height: 11.375rem;

  padding: 1rem;
  gap: 0.8125rem;

  border-radius: 1rem 1rem 0px 0px;
  border-top: 1px solid ${COLORS['gray-4']};
  border-right: 1px solid ${COLORS['gray-4']};
  border-left: 1px solid ${COLORS['gray-4']};
  background: ${COLORS['gray-5']};
`;

const PlayerProfile = styled.img`
  flex-shrink: 0;

  width: 6.625rem;
  height: 6.6875rem;
`;

const CBadge = styled.div`
  display: flex;
  align-items: center;

  gap: 0.375rem;
`;

const PlayerIcon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
`;

const PlayerName = styled.h6`
  color: ${COLORS.text};

  font-family: 'WantedSans-Medium';
  font-size: 1.125rem;
  font-weight: 500;
`;

const PlayerReady = styled.div<{ $ready?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  padding: 0.4375rem 0;
  width: 100%;
  height: 2.125rem;

  border-radius: 0 0 1rem 1rem;
  background: ${(props) => (props.$ready ? COLORS.primary : COLORS['gray-4'])};

  & > span {
    color: ${(props) => (props.$ready ? COLORS.bg : COLORS.text)};
    text-align: center;
    white-space: nowrap;

    font-family: 'WantedSans-SemiBold';
    font-size: ${FONT_SIZES['subtitle-1']};
    font-weight: 600;
  }
`;

export {
  CPlayerList,
  WrapPlayerList,
  CPlayer,
  PlayerInfo,
  PlayerProfile,
  CBadge,
  PlayerIcon,
  PlayerName,
  PlayerReady,
};
