import styled from "styled-components";
import { COLORS } from "../theme";

const WrapForm = styled.div`
  display: flex;
  height: 12.5rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  cursor: pointer;

  border-radius: 1rem;
  border: 0.125rem solid ${COLORS["gray-4"]};
  background: ${COLORS.bg};
  opacity: 80%;
`;

const GameStart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${COLORS.primary};
  font-family: WantedSans-SemiBold;
  font-size: 2rem;
  font-weight: 600;
`;

const Player = styled.div`
  display: flex;
  width: 17.5rem;
  padding: 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0 0 1rem 1rem;
  border: 0.125rem solid ${COLORS["gray-4"]};
  background: ${COLORS["gray-4"]};
`;

const PlayerName = styled.span`
  color: ${COLORS.text};
  font-family: WantedSans-SemiBold;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Line = styled.div`
  width: 0.0625rem;
  height: 0.875rem;
  border-radius: 0.0625rem;
  background: ${COLORS["gray-2"]};
`;

const Rank = styled.img`
  width: 1.125rem;
  height: 1.125rem;
`;

const LogOut = styled(Rank)``;

const LogIn = styled(Player)`
  background: ${COLORS.primary};
  border: 0.125rem solid ${COLORS.primary};
`;

const Wakgames = styled(Rank)`
  color: ${COLORS.bg};
  width: 1.5rem;
  height: 1.5rem;
`;
const LoginName = styled(PlayerName)`
  color: ${COLORS.bg};
`;

export {
  WrapForm,
  GameStart,
  Player,
  PlayerName,
  Line,
  Rank,
  LogOut,
  Wakgames,
  LogIn,
  LoginName,
};
