import styled from 'styled-components';
import { COLORS } from '@/styles/theme';

const HeaderBlock = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;

  width: 88rem;
  height: 4.1875rem;

  padding: 0 2rem;

  border-radius: 1rem;
  border: 2px solid ${COLORS['gray-4']};
  background: ${COLORS.bg};
`;

const HeaderLogo = styled.img`
  flex-shrink: 0;
  width: 3.59938rem;
  height: 1.5rem;

  cursor: pointer;
`;

const WrapContent = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1.5rem;
`;

const Content = styled.a`
  color: ${COLORS.text};
`;

const Player = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 1rem;
  gap: 0.5rem;

  border-radius: 0.5rem;
  background: ${COLORS['gray-1']};
`;

const Rank = styled.img`
  width: 1.125rem;
  height: 1.125rem;
`;

const Line = styled.div`
  width: 0.0625rem;
  height: 0.875rem;

  border-radius: 0.0625rem;
  background: ${COLORS['gray-2']};
`;

const PlayerName = styled.span`
  color: ${COLORS.bg};
`;

export {
  HeaderBlock,
  HeaderLogo,
  WrapContent,
  Content,
  Player,
  Rank,
  Line,
  PlayerName,
};
