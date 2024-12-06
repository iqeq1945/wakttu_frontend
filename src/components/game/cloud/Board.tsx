import { Cloud, CloudText, Game } from '@/styles/cloud/Cloud';

export interface Cloud {
  _id: string;
  x: string;
  y: string;
  duration: string;
  delay: string;
  clear: boolean;
}

interface Props {
  clouds: Cloud[];
}

const Board = ({ clouds }: Props) => {
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
