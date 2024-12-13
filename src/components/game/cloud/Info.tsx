import { Timer } from '@/redux/timer/timerSlice';
import { getR2URL } from '@/services/api';
import { Game } from '@/services/socket/socket';
import { Box, InfoContainer, Text, Weather } from '@/styles/cloud/Info';

interface Props {
  game: Game;
  weather?: string;
  pause: boolean;
  timer: Timer;
}

const getWeatherImg = (weather = 'sun') => {
  return getR2URL('/assets/game/' + weather + '.svg');
};

const Info = ({ game, weather, timer, pause }: Props) => {
  return (
    <InfoContainer>
      <Box>
        <Text>라운드</Text>
        <Text>{game.round}</Text>
      </Box>
      <Box>
        <Weather src={getWeatherImg(weather)} />
      </Box>
      <Box>
        <Text>시간</Text>
        <Text>{(timer.roundTime - timer.countTime) / 1000}</Text>
      </Box>
    </InfoContainer>
  );
};

export default Info;
