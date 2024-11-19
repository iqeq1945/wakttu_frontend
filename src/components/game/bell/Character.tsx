import { selectRoomUsers } from '@/redux/roomInfo/roomInfoSlice';
import { Box, Message, Skin } from '@/styles/bell/Character';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface Props {
  src: string;
  user: any;
  left?: number;
  right?: number;
  width?: number;
}

const messageTypes = {
  greetings: (name: string) => [
    `${name} 하이빵가루!`,
    `${name} ㄷㄱㅈ`,
    `이세돌 뱅온해!`,
  ],
  cheering: (name: string) => [
    `${name} 화이또!`,
    `왁뚜는 젠황!`,
    `${name}! ${name}!`,
  ],
  jokes: (name: string) => [
    `${name}님 수듄ㅋㅋ`,
    `역시 형이야`,
    `${name} 미테테네`,
  ],
  reactions: (name: string) => [
    `와우 ${name}!`,
    `대박 ${name}!`,
    `${name} ㄱㅇㅇ!`,
  ],
};

const Character = ({ src, left, right, width }: Props) => {
  const users = useSelector(selectRoomUsers);
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNewMessage = () => {
      const categories = Object.keys(messageTypes);
      const randomCategory =
        categories[Math.floor(Math.random() * categories.length)];
      const messageGenerator =
        messageTypes[randomCategory as keyof typeof messageTypes];

      const randomUser = users[Math.floor(Math.random() * users.length)];
      const messages = messageGenerator(randomUser.name);
      const idx = Math.floor(Math.random() * messages.length);

      setIsVisible(true);
      setMessage(messages[idx]);

      setTimeout(() => setIsVisible(false), 2000);

      const nextDelay = Math.floor(Math.random() * 3000) + 2000;
      setTimeout(showNewMessage, nextDelay);
    };

    showNewMessage();

    return () => {};
  }, [users]);

  return (
    <Box left={left} right={right}>
      {isVisible && <Message>{message}</Message>}
      <Skin src={src} width={width} alt="캐릭터 스킨 이미지" />
    </Box>
  );
};

export default Character;
