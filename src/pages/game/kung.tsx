import Chat from '@/containers/game/kung/Chat';
import Header from '@/containers/game/kung/Header';
import Kung from '@/containers/game/kung/Kung';
import PlayerList from '@/containers/game/kung/PlayerList';
import { Container } from '@/styles/kung/Layout';
import { socket } from '@/services/socket/socket';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearHistory } from '@/redux/history/historySlice';
import { selectGame, setGame } from '@/redux/game/gameSlice';
import { setTimer } from '@/redux/timer/timerSlice';
import { setPause } from '@/redux/answer/answerSlice';
import { selectUserInfo } from '@/redux/user/userSlice';
import { selectRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
const Game = () => {
  const dispatch = useDispatch();
  const game = useSelector(selectGame);
  const user = useSelector(selectUserInfo);
  const roomInfo = useSelector(selectRoomInfo);

  /**
   * Round 변할때마다 History Clear
   */
  useEffect(() => {
    dispatch(clearHistory());
  }, [game.round, dispatch]);

  /**
   * Round Logic
   */
  useEffect(() => {
    socket.on('kung.round', (data) => {
      dispatch(setGame(data));
      setTimeout(() => {
        setTimeout(() =>
          dispatch(
            setTimer({ roundTime: data.roundTime, turnTime: data.turnTime })
          )
        );
        setTimeout(() => dispatch(setPause(true)));
        if (game.host === user.name) lastTurnStart(roomInfo.id as string);
      }, 4000);
    });
  });

  return (
    <Container>
      <Header />
      <Kung />
      <PlayerList />
      <Chat />
    </Container>
  );
};

export default Game;
