import {
  ChatLog,
  CChat,
  MessageBlock,
  MessageInput,
  SendMessage,
  SendIcon,
} from "@/styles/common/Chat";
import { Chat } from "@/components";

const object = [
  {
    name: "이파리",
    chat: "안뇽하신가?",
  },
  {
    name: "부가땅",
    chat: "안뇽하신가?!!",
  },
  {
    name: "룰루라라라1",
    chat: "안뇽하신가!!!!!!!!!!!!!!!!!!!!11?",
  },
  {
    name: "역시형이야",
    chat: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
  },
  {
    name: "이파리",
    chat: "안뇽하신가?",
  },
  {
    name: "부가땅",
    chat: "안뇽하신가?!!",
  },
  {
    name: "룰루라라라1",
    chat: "안뇽하신가!!!!!!!!!!!!!!!!!!!!11?",
  },
  {
    name: "역시형이야",
    chat: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
  },
  {
    name: "이파리",
    chat: "안뇽하신가?",
  },
  {
    name: "부가땅",
    chat: "안뇽하신가?!!",
  },
  {
    name: "룰루라라라1",
    chat: "안뇽하신가!!!!!!!!!!!!!!!!!!!!11?",
  },
  {
    name: "역시형이야",
    chat: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
  },
  {
    name: "이파리",
    chat: "안뇽하신가?",
  },
  {
    name: "부가땅",
    chat: "안뇽하신가?!!",
  },
  {
    name: "룰루라라라1",
    chat: "안뇽하신가!!!!!!!!!!!!!!!!!!!!11?",
  },
  {
    name: "역시형이야",
    chat: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
  },
  {
    name: "이파리",
    chat: "안뇽하신가?",
  },
  {
    name: "부가땅",
    chat: "안뇽하신가?!!",
  },
  {
    name: "룰루라라라1",
    chat: "안뇽하신가!!!!!!!!!!!!!!!!!!!!11?",
  },
  {
    name: "역시형이야",
    chat: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
  },
  {
    name: "이파리",
    chat: "안뇽하신가?",
  },
  {
    name: "부가땅",
    chat: "안뇽하신가?!!",
  },
  {
    name: "룰루라라라라라라",
    chat: "안뇽하신가!!!!!!!!!!!!!!!!!!!!11?",
  },
  {
    name: "역시형이야",
    chat: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
  },
];

const ChatBox = () => {
  return (
    <CChat>
      <ChatLog>
        {object.map((data, idx) => {
          return <Chat key={idx} name={data.name} chat={data.chat} />;
        })}
      </ChatLog>
      <MessageBlock>
        <MessageInput />
        <SendMessage>
          <SendIcon src="/assets/send.svg" />
        </SendMessage>
      </MessageBlock>
    </CChat>
  );
};

export default ChatBox;
