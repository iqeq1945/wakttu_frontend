import { Timer } from '@/redux/timer/timerSlice';
import { Game } from '@/services/socket/socket';
import { Box, InfoContainer, Text, Weather } from '@/styles/cloud/Info';

interface Props {
  game: Game;
  weather?: string;
  timer: Timer;
}

const Info = ({ game, weather, timer }: Props) => {
  return (
    <InfoContainer>
      <Box>
        <Text>라운드</Text>
        <Text>{game.round}</Text>
      </Box>
      <Box>
        <Weather src={'/assets/game/cloud.svg'} />
      </Box>
      <Box>
        <Text>시간</Text>
        <Text>{timer.turnTime - timer.countTime}</Text>
      </Box>
    </InfoContainer>
  );
};

export default Info;
