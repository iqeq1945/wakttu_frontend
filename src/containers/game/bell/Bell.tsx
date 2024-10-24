import { Bell } from '@/components';
import { selectAnswer } from '@/redux/answer/answerSlice';
import { selectGame } from '@/redux/game/gameSlice';
import { selectTimer } from '@/redux/timer/timerSlice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Game = () => {
  const game = useSelector(selectGame);
  const answer = useSelector(selectAnswer);
  const timer = useSelector(selectTimer);
  const [quiz, setQuiz] = useState<{
    [x: string]: any;
    _id: string;
    choseong: string;
    hint: string[];
  }>();

  useEffect(() => {
    if (game.quiz && game.round > 0) {
      const quiz = {
        _id: game.quiz[game.round - 1]._id,
        mean: game.quiz[game.round - 1].mean,
        type: game.quiz[game.round - 1].type,
        tag: game.quiz[game.round - 1].meta.tag,
        choseong: game.quiz[game.round - 1].choseong,
        hint: game.quiz[game.round - 1].hint,
      };
      setQuiz(quiz);
    }
  }, [game.quiz, game.round]);

  return <Bell game={game} quiz={quiz} answer={answer} timer={timer} />;
};

export default Game;
