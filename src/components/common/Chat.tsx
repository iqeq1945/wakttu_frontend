import { getIcon } from '@/modules/UserInfo';
import {
  PlayerChat,
  CPlayer,
  PlayerName,
  PlayerIcon,
  ChatContent,
  DateContent,
} from '@/styles/common/Chat';
import { useEffect, useState } from 'react';

interface Props {
  user: any;
  chat: string;
  date: string;
}

const Chat = ({ user, chat, date }: Props) => {
  const [icon, setIcon] = useState('');

  useEffect(() => {
    setIcon(getIcon(user.score, user.provider));
  }, [user.provider, user.score]);

  return (
    <PlayerChat>
      <CPlayer>
        <PlayerIcon src={icon} alt="플레이어 등급" />
        <PlayerName $color={user.color}>{user.name}</PlayerName>
        <ChatContent>{chat}</ChatContent>
      </CPlayer>
      <DateContent>{date}</DateContent>
    </PlayerChat>
  );
};

export default Chat;
