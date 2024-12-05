import { Box, InfoContainer, Text, Weather } from '@/styles/cloud/Info';

const Info = () => {
  return (
    <InfoContainer>
      <Box>
        <Text>라운드</Text>
        <Text>1</Text>
      </Box>
      <Box>
        <Weather src={'/assets/game/cloud.svg'} />
      </Box>
      <Box>
        <Text>시간</Text>
        <Text>30</Text>
      </Box>
    </InfoContainer>
  );
};

export default Info;
