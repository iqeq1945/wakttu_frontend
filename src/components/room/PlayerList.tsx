import { CPlayerList, WrapPlayerList } from '@/styles/room/PlayerList';
import { Player } from '@/components';
import { useSelector } from 'react-redux';
import { selectUserName } from '@/redux/user/userSlice';

interface Props {
  users: any[];
  ready: any[];
  host: string;
}

const PlayerList = ({ users, ready, host }: Props) => {
  const arr = [...users];
  const len = arr.length;
  const myName = useSelector(selectUserName);

  for (let i = 0; i < 8 - len; i++) arr.push({ id: i, name: undefined });

  const checkReady = (userId: string) => {
    const idx = ready.findIndex((x) => x.userId === userId);
    if (idx >= 0) return true;
    return false;
  };

  return (
    <CPlayerList>
      <WrapPlayerList>
        {arr.map((user) => {
          return (
            <Player
              key={user.id}
              $ready={checkReady(user.id)}
              user={user}
              myName={myName as string}
              host={host}
            />
          );
        })}
      </WrapPlayerList>
    </CPlayerList>
  );
};

export default PlayerList;
