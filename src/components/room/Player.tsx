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
  ready: boolean;
}

const Player = ({ ready }: Props) => {
  return (
    <CPlayer>
      <PlayerInfo>
        <PlayerProfile src="" />
        <CBadge>
          <PlayerIcon />
          <PlayerName />
        </CBadge>
        <PlayerReady />
      </PlayerInfo>
    </CPlayer>
  );
};

export default Player;
