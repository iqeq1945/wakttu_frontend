import {
  CPlayer,
  PlayerInfo,
  PlayerProfile,
  CBadge,
  PlayerIcon,
  PlayerName,
  PlayerReady,
} from "@/styles/room/PlayerList";

interface Props {
  $ready: boolean;
}

const Player = ({ $ready }: Props) => {
  return (
    <CPlayer>
      <PlayerInfo>
        <PlayerProfile src="/assets/player-profile.png" />
        <CBadge>
          <PlayerIcon src="/assets/amoeba.svg" />
          <PlayerName>이파리</PlayerName>
        </CBadge>
      </PlayerInfo>
      <PlayerReady $ready={$ready}>
        <span>{$ready ? "준비 됨" : "준비 안됨"}</span>
      </PlayerReady>
    </CPlayer>
  );
};

export default Player;
