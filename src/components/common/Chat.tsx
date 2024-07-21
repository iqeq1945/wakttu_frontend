import {
  PlayerChat,
  CPlayer,
  PlayerName,
  PlayerIcon,
  ChatContent,
  DateContent,
} from "@/styles/common/Chat";

interface Props {
  user: any;
  chat: string;
  date: string;
}

const Chat = ({ user, chat, date }: Props) => {
  return (
    <PlayerChat>
      <CPlayer>
        <PlayerIcon src="/assets/amoeba.svg" />
        <PlayerName>{user.name}</PlayerName>
        <ChatContent>{chat}</ChatContent>
      </CPlayer>
      <DateContent>{date}</DateContent>
    </PlayerChat>
  );
};

export default Chat;
