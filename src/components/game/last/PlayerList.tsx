import {
  CName,
  CPlayer,
  CPlayerList,
  Host,
  Name,
  PlusScore,
  Score,
  Skin,
} from '@/styles/last/PlayList';
import { Game } from '@/services/socket/socket';
import { Answer } from '@/redux/answer/answerSlice';
import { ScoreBox } from '@/components';
import { getR2URL } from '@/services/api';
import { Bubble } from '@/containers/game/last/PlayerList';
import BubbleBox from './Bubble';
import { useState } from 'react';

interface Props {
  users: any;
  game: Game;
  answer: Answer;
  bubble: Bubble[];
}

const PlayList = ({ users, game, answer, bubble }: Props) => {
  const [scoreDifferences, setScoreDifferences] = useState<{ [key: number]: number }>({})

  const handleScoreDifference = (userId: number, difference: number) => {
    setScoreDifferences((prev) => ({
      ...prev,
      [userId]: difference,
    }));
  };

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
            {scoreDifferences[user.id] ? <PlusScore>+{scoreDifferences[user.id]}</PlusScore> : null}
            <CName>
              {user.name === game.host && (
                <Host>
                  <span>방장</span>
                </Host>
              )}

              <Name>{user.name}</Name>
            </CName>
            <Score>
              <ScoreBox
                score={user.score as number}
                onScoreDifference={(difference) => handleScoreDifference(user.id, difference)} />
            </Score>
          </CPlayer>
        );
      })}
    </CPlayerList>
  );
};

export default PlayList;
