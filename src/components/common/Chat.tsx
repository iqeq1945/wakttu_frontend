import {
  PlayerChat,
  CPlayer,
  PlayerName,
  PlayerIcon,
  ChatContent,
  DateContent,
} from "@/styles/common/Chat";

interface Props {
  name: string;
  chat: string;
}

const Chat = ({ name, chat }: Props) => {
  return (
    <PlayerChat>
      <CPlayer>
        <PlayerIcon src="/assets/amoeba.svg" />
        <PlayerName>{name}</PlayerName>
        <ChatContent>{chat}</ChatContent>
      </CPlayer>
      <DateContent>오전 12:00:00</DateContent>
    </PlayerChat>
  );
};

export default Chat;
