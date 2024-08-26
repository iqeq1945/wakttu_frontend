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

interface Props {
  users: any;
  game: Game;
  answer: Answer;
}

const PlayList = ({ users, game, answer }: Props) => {
  return (
    <CPlayerList>
      {users.map((user: any, index: number) => {
        return (
          <CPlayer key={user.id} $turn={answer.pause && game.turn === index}>
            <Skin src={'/assets/ipali.png'} />
            <CName>
              {user.name === game.host && (
                <Host>
                  <span>방장</span>
                </Host>
              )}

              <Name>{user.name}</Name>
            </CName>
            <Score>{user.score}</Score>
          </CPlayer>
        );
      })}
    </CPlayerList>
  );
};

export default PlayList;
