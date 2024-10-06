import { Box, Message, Skin } from '@/styles/bell/Character';
import { useEffect, useState } from 'react';

interface Props {
  src: string;
  user: any;
  left?: number;
  right?: number;
  width?: number;
}

const list = ['화이팅!', '수듄ㅋㅋ', '역시, 형이야', '뱅온해!', '할 수 있어!'];

const Character = ({ user, src, left, right, width }: Props) => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    setInterval(() => {
      const idx = Math.floor(Math.random() * list.length);
      setMessage(list[idx]);
    }, 3000);
  }, []);

  return (
    <Box left={left} right={right}>
      {message.length > 0 ? <Message>{message}</Message> : ''}
      <Skin src={src} width={width} />
    </Box>
  );
};

export default Character;
