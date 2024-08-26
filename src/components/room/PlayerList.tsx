import { CPlayerList, WrapPlayerList } from '@/styles/room/PlayerList';
import { Player } from '@/components';
import { useSelector } from 'react-redux';
import { selectUserName } from '@/redux/user/userSlice';

interface Props {
  users: any[];
  ready: any[];
  host: string;
  name: string;
  onKick: (data: { id: string; name: string }) => void;
}

const PlayerList = ({ users, ready, host, name, onKick }: Props) => {
  const checkReady = (userId: string) => {
    const idx = ready.findIndex((x) => x.userId === userId);
    if (idx >= 0) return true;
    return false;
  };

  return (
    <CPlayerList>
      <WrapPlayerList>
        {users.map((user) => {
          return (
            <Player
              key={user.id}
              $ready={checkReady(user.id)}
              user={user}
              myName={name as string}
              host={host}
              onKick={onKick}
            />
          );
        })}
      </WrapPlayerList>
    </CPlayerList>
  );
};

export default PlayerList;
