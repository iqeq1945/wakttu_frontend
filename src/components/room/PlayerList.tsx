import { CPlayerList, WrapPlayerList } from '@/styles/room/PlayerList';
import { Player } from '@/components';

interface Props {
  users: any[];
}

const PlayerList = ({ users }: Props) => {
  const length = users.length;
  const arr = [...users];

  for (let i = 0; i < 8 - length; i++) {
    arr.push({ id: i, name: undefined });
  }

  return (
    <CPlayerList>
      <WrapPlayerList>
        {arr.map((user, idx) => {
          return <Player key={user.id} $ready={false} user={user} />;
        })}
      </WrapPlayerList>
    </CPlayerList>
  );
};

export default PlayerList;
