import {
  CPlayer,
  PlayerInfo,
  PlayerProfile,
  CBadge,
  PlayerIcon,
  PlayerName,
  PlayerReady,
} from '@/styles/room/PlayerList';

interface Props {
  $ready: boolean;
  user: any;
}

const Player = ({ $ready, user }: Props) => {
  return (
    <CPlayer>
      {user.name && (
        <>
          <PlayerInfo>
            <PlayerProfile src="/assets/player-profile.png" />
            <CBadge>
              <PlayerIcon src="/assets/amoeba.svg" />
              <PlayerName>{user.name}</PlayerName>
            </CBadge>
          </PlayerInfo>
          <PlayerReady $ready={$ready}>
            <span>{$ready ? '준비 됨' : '준비 안됨'}</span>
          </PlayerReady>
        </>
      )}
      {!user.name && (
        <>
          <PlayerInfo></PlayerInfo>
          <PlayerReady $ready={$ready}>
            <span>빈자리</span>
          </PlayerReady>
        </>
      )}
    </CPlayer>
  );
};

export default Player;
