import { Result as CResult, ResultSolo, ResultTeam } from '@/components';
import { closeModal, selectData } from '@/redux/modal/modalSlice';
import { selectUserInfo } from '@/redux/user/userSlice';
import { winTheGame } from '@/services/api';
import { Game } from '@/services/socket/socket';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RoomInfo } from './UpdateRoom';

interface User {
  character: any;
  id: string;
  userId: string;
  name: string;
  score: number;
  team?: string;
  exp: number;
  provider?: string;
}

interface Result {
  rank: number;
  name: string;
  userId: string;
  character: string;
  score: number;
  exp: number;
  team?: string;
}

const Result = () => {
  const dispatch = useDispatch();
  const { game, roomInfo }: { game: Game; roomInfo: RoomInfo } =
    useSelector(selectData);
  const user = useSelector(selectUserInfo);
  const [list, setList] = useState<Result[]>([]);

  const offModal = useCallback(() => {
    if (user.provider === 'waktaverse.games') {
      if (roomInfo.option.includes('팀전')) {
        const team = list[0].team;
        const check = list.find(
          (item) => item.userId === user.id && item.team === team
        );
        if (check) winTheGame(true);
      } else {
        if (list[0].userId === user.id) winTheGame(false);
      }
    }
    dispatch(closeModal());
  }, [dispatch, list, roomInfo.option, user.id, user.provider]);

  useEffect(() => {
    let i = 1;
    let score = game.users[0].score;
    const data = (game.users as []).map((user: User) => {
      if (user.score !== score) {
        i++;
        score = user.score;
      }
      return {
        rank: i,
        name: user.name,
        userId: user.userId,
        character: user.character,
        score: score,
        exp: user.exp,
        team: user.team ? user.team : undefined,
      };
    });
    setList(data);
  }, [game]);

  return (
    <>
      {roomInfo.option.includes('팀원') ? (
        <ResultTeam list={list} offModal={offModal} user={user} />
      ) : (
        <ResultSolo list={list} offModal={offModal} user={user} />
      )}
    </>
  );
};

export default Result;
