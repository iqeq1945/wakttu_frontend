import { CPlayerList, WrapPlayerList } from '@/styles/room/PlayerList';
import { Player } from '@/components';

interface Props {
  users: any[];
  ready: any[];
  host: string;
  name: string;
  team: { woo: string[]; gomem: string[] };
  onKick: (data: { id: string; name: string }) => void;
}

const PlayerList = ({ users, ready, host, name, team, onKick }: Props) => {
  const checkReady = (userId: string) => {
    const idx = ready.findIndex((x) => x.userId === userId);
    if (idx >= 0) return true;
    return false;
  };
  const checkMyTeam = (userId: string) => {
    const InWoo = team.woo.findIndex((id) => id === userId);
    const InGomem = team.gomem.findIndex((id) => id === userId);
    if (InWoo !== -1) return 'woo';
    else if (InGomem !== -1) return 'gomem';
    else return undefined;
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
              team={checkMyTeam(user.id)}
              onKick={onKick}
            />
          );
        })}
      </WrapPlayerList>
    </CPlayerList>
  );
};

export default PlayerList;
