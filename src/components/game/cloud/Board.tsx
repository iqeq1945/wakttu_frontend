import { Cloud, CloudText, Game } from '@/styles/cloud/Cloud';

const getRandomPosition = () => {
  const maxWidth = 82 - 10.875;
  const maxHeight = 32.6875 - 7.4375;
  const x = `${Math.random() * maxWidth}rem`;
  const y = `${Math.random() * maxHeight}rem`;
  return { x, y };
};
const getRandomAnimationProperties = () => {
  const duration = `${Math.random() * 3 + 3}s`; // 3초에서 6초 사이의 지속 시간
  const delay = `${Math.random() * 2}s`; // 0초에서 2초 사이의 지연 시간
  return { duration, delay };
};

const Board = () => {
  const clouds = Array.from({ length: 20 }, () => ({
    ...getRandomPosition(),
    ...getRandomAnimationProperties(),
  }));
  return (
    <Game>
      {clouds.map((cloud, index) => (
        <Cloud
          key={index}
          x={cloud.x}
          y={cloud.y}
          duration={cloud.duration}
          delay={cloud.delay}
        >
          <CloudText>이세계아이돌</CloudText>
        </Cloud>
      ))}
    </Game>
  );
};

export default Board;
