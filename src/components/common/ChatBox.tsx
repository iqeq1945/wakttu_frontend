import {
  ChatLog,
  CChat,
  MessageBlock,
  MessageInput,
  SendMessage,
  SendIcon,
} from "@/styles/common/Chat";
import { Chat } from "@/components";
import { ChangeEventHandler, useEffect, useRef, KeyboardEvent } from "react";
import { LogProps } from "@/containers/roomlist/Chat";

interface Props {
  log: LogProps[];
  message: string;
  onChange: ChangeEventHandler;
  onClick: () => void;
}

const ChatBox = ({ log, message, onChange, onClick }: Props) => {
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };

  const InputFocus = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [log]);

  useEffect(() => {
    InputFocus();
  }, [onClick, log]);

  return (
    <CChat>
      <ChatLog ref={chatBoxRef}>
        {log.map((element, idx) => {
          return (
            <Chat
              key={idx}
              user={element.user}
              chat={element.chat}
              date={element.date}
            />
          );
        })}
      </ChatLog>
      <MessageBlock>
        <MessageInput
          ref={inputRef}
          name="chat"
          value={message}
          maxLength={50}
          onChange={onChange}
          onKeyDown={handleEnter}
        />
        <SendMessage onClick={onClick}>
          <SendIcon src="/assets/send.svg" />
        </SendMessage>
      </MessageBlock>
    </CChat>
  );
};

export default ChatBox;
