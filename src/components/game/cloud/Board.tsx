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
  clouds?: Cloud[];
  pause: boolean;
}

const Board = ({ clouds, pause }: Props) => {
  return (
    <Game>
      {clouds &&
        clouds.map((cloud, index) => (
          <Cloud
            key={index}
            x={cloud.x}
            y={cloud.y}
            duration={cloud.duration}
            delay={cloud.delay}
            clear={pause ? cloud.clear : true}
          >
            <CloudText>{cloud._id}</CloudText>
          </Cloud>
        ))}
    </Game>
  );
};

export default Board;
