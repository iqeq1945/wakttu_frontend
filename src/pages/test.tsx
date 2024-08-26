import { Last } from '@/components';
import { selectAnswer, setAnswer } from '@/redux/answer/answerSlice';
import { selectGame } from '@/redux/game/gameSlice';
import { useDispatch, useSelector } from 'react-redux';
const Test = () => {
  const game = useSelector(selectGame);
  const answer = useSelector(selectAnswer);
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(
      setAnswer({
        answer: '',
        success: true,
        message: '',
        word: '',
        pause: false,
      })
    );
  }, 2000);
  return (
    <Last
      history={[{ id: '테스팅', type: '명사', mean: '의미' }]}
      game={game}
      answer={answer}
      historyBoxRef={undefined}
    />
  );
};

export default Test;
