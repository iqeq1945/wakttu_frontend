import {
  CName,
  CPlayer,
  CPlayerList,
  Host,
  Name,
  Score,
  Skin,
} from '@/styles/last/PlayList';
import { Game } from '@/services/socket/socket';
import { Answer } from '@/redux/answer/answerSlice';
import { ScoreBox } from '@/components';
import { getR2URL } from '@/services/api';
import { Bubble } from '@/containers/game/last/PlayerList';
import BubbleBox from './Bubble';
import Difference from './DifferenceBox';

interface Props {
  users: any;
  game: Game;
  answer: Answer;
  bubble: Bubble[];
}

const PlayList = ({ users, game, answer, bubble }: Props) => {
  return (
    <CPlayerList>
      {users.map((user: any, index: number) => {
        const isTurn = game.turn === index;
        const isFail =
          isTurn && answer.success === false && answer.pause === true;

        const lastBubble = bubble.findLast(
          (item: Bubble) => item.user.name === user.name
        );
        return (
          <CPlayer key={user.id} $turn={answer.pause && isTurn} $fail={isFail}>
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
