import { Container } from '@/styles/last/Layout';
import PlayerList from '@/containers/game/last/PlayerList';
import Chat from '@/containers/game/last/Chat';
import Header from '@/containers/game/last/Header';
import Info from '@/containers/game/last/Info';
import Last from '@/containers/game/last/Last';
import { useDispatch, useSelector } from 'react-redux';
import { selectGame, setGame } from '@/redux/game/gameSlice';
import { lastRound, socket } from '@/services/socket/socket';
import { selectRoomId } from '@/redux/roomInfo/roomInfoSlice';
import { useEffect, useState } from 'react';
import { setPause } from '@/redux/answer/answerSlice';
import { Timer } from '@/modules/Time';
const Game = () => {
  const dispatch = useDispatch();
  const game = useSelector(selectGame);
  const roomId = useSelector(selectRoomId) as string;

  const [time, setTime] = useState<number>(0);

  const onTick = (time: number) => {
    setTime(time);
  };
  const timer = new Timer(game.roundTime, onTick);

  useEffect(() => {
    socket.on('last.round', (data) => {
      dispatch(setGame(data));
      dispatch(setPause(true));
      timer.start();
    });

    return () => {
      socket.off('last.round');
    };
  }, [dispatch, game.roundTime, roomId, timer]);

  return (
    <Container>
      <Header />
      <Info time={time} />
      <Last timer={timer} />
      <PlayerList />
      <Chat timer={timer!} time={time} />
    </Container>
  );
};

export default Game;
