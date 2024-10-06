import { Result as CResult } from '@/components';
import { closeModal, selectData } from '@/redux/modal/modalSlice';
import { selectUserInfo } from '@/redux/user/userSlice';
import { winTheGame } from '@/services/api';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface User {
  id: string;
  userId: string;
  name: string;
  score: number;
  team?: string;
  [x: string]: any;
}

interface Result {
  rank: number;
  name: string;
  userId: string;
  score: number;
  team?: string;
}

const Result = () => {
  const dispatch = useDispatch();
  const { game, roomInfo } = useSelector(selectData);
  const user = useSelector(selectUserInfo);
  const [list, setList] = useState<Result[]>([]);

  const offModal = useCallback(() => {
    if (roomInfo.option.includes('팀전')) {
      const team = list[0].team;
      const check = list.find(
        (item) => item.userId === user.id && item.team === team
      );
      if (check && user.provider === 'waktaverse.games') winTheGame(true);
    } else {
      if (list[0].userId === user.id) winTheGame(false);
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
      return { rank: i, name: user.name, userId: user.userId, score: score };
    });
    setList(data);
  }, [game]);

  return <CResult list={list} offModal={offModal} />;
};

export default Result;
