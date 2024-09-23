import {
  CName,
  CPlayer,
  CPlayerList,
  Host,
  Name,
  Score,
  Skin,
  TeamTag,
} from '@/styles/last/PlayList';
import { Game } from '@/services/socket/socket';
import { Answer } from '@/redux/answer/answerSlice';
import { ScoreBox } from '@/components';
import { getR2URL } from '@/services/api';
import { Bubble } from '@/containers/game/last/PlayerList';
import BubbleBox from '../Bubble';
import Difference from './DifferenceBox';

interface Props {
  users: any;
  game: Game;
  answer: Answer;
  bubble: Bubble[];
  team: { woo: string[]; gomem: string[] };
}

const PlayList = ({ users, game, answer, bubble, team }: Props) => {
  const checkMyTeam = (userId: string) => {
    const InWoo = team.woo.findIndex((id) => id === userId);
    const InGomem = team.gomem.findIndex((id) => id === userId);
    if (InWoo !== -1) return 'woo';
    else if (InGomem !== -1) return 'gomem';
    else return undefined;
  };
  return (
    <CPlayerList>
      {users.map((user: any, index: number) => {
        const myTeam = checkMyTeam(user.userId);
        const isTurn = game.turn === index;
        const isFail = isTurn && answer.success === false;

        const lastBubble = bubble.findLast(
          (item: Bubble) => item.user.name === user.name
        );
        return (
          <CPlayer
            key={user.id}
            $turn={answer.pause && isTurn}
            $fail={isFail && answer.pause === true}
            $end={isFail}
          >
            {myTeam ? (
              <TeamTag team={myTeam}>
                {myTeam === 'woo' ? '우왁굳' : '고멤'}
              </TeamTag>
            ) : (
              ''
            )}
            {lastBubble ? <BubbleBox chat={lastBubble.chat} /> : ''}
            <Skin src={getR2URL('/assets/ipali.png')} />

            <CName>
              {user.name === game.host && (
                <Host>
                  <span>방장</span>
                </Host>
              )}

              <Name>{user.name}</Name>
            </CName>
            <Difference score={user.score as number} />
            <Score>
              <ScoreBox score={user.score as number} />
            </Score>
          </CPlayer>
        );
      })}
    </CPlayerList>
  );
};

export default PlayList;
