import { Box, Message, Skin } from '@/styles/bell/Character';
import { useEffect, useState } from 'react';

interface Props {
  src: string;
  user: any;
  left?: number;
  right?: number;
  width?: number;
}

const messageTypes = {
  greetings: ['안녕하세요!', '반가워요~', '뱅온해!'],
  cheering: ['화이팅!', '할 수 있어!', '잘하고 있어요!'],
  jokes: ['수듄ㅋㅋ', '역시, 형이야', '미테테네'],
  reactions: ['와우!', '대박!', '신기해요!'],
};

const Character = ({ user, src, left, right, width }: Props) => {
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNewMessage = () => {
      const categories = Object.keys(messageTypes);
      const randomCategory =
        categories[Math.floor(Math.random() * categories.length)];
      const messages =
        messageTypes[randomCategory as keyof typeof messageTypes];

      const idx = Math.floor(Math.random() * messages.length);

      setIsVisible(true);
      setMessage(messages[idx]);

      setTimeout(() => setIsVisible(false), 2000);

      const nextDelay = Math.floor(Math.random() * 3000) + 2000;
      setTimeout(showNewMessage, nextDelay);
    };

    showNewMessage();

    return () => {};
  }, []);

  return (
    <Box left={left} right={right}>
      {isVisible && <Message>{message}</Message>}
      <Skin src={src} width={width} />
    </Box>
  );
};

export default Character;
