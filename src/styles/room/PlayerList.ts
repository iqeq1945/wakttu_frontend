import styled from "styled-components";
import { COLORS } from "../theme";

const CPlayerList = styled.article`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;

  border-radius: 1rem;
  border: 0.125rem solid ${COLORS["gray-4"]};
`;

const CPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`;

const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  flex: 1 0 0;

  padding: 1rem;
  gap: 0.8125rem;

  border-radius: 1rem 1rem 0px 0px;
  border-top: 1px solid ${COLORS["gray-4"]};
  border-right: 1px solid ${COLORS["gray-4"]};
  border-left: 1px solid ${COLORS["gray-4"]};
  background: ${COLORS["gray-5"]};
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

  font-family: "WantedSans-Medium";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export { CPlayerList, CPlayer, PlayerInfo, PlayerProfile };
