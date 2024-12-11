import { Timer } from '@/redux/timer/timerSlice';
import { Game } from '@/services/socket/socket';
import { Box, InfoContainer, Text, Weather } from '@/styles/cloud/Info';

interface Props {
  game: Game;
  weather?: string;
  pause: boolean;
  timer: Timer;
}

const Info = ({ game, weather, timer, pause }: Props) => {
  return (
    <InfoContainer>
      <Box>
        <Text>라운드</Text>
        <Text>{game.round}</Text>
      </Box>
      <Box>
        {pause ? (
          <Weather src={'/assets/game/cloud.svg'} />
        ) : (
          <Weather src={'/assets/game/sun.svg'} />
        )}
      </Box>
      <Box>
        <Text>시간</Text>
        <Text>{(timer.roundTime - timer.countTime) / 1000}</Text>
      </Box>
    </InfoContainer>
  );
};

export default Info;
