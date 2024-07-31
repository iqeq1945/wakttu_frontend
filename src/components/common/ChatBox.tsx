import {
  ChatLog,
  CChat,
  MessageBlock,
  MessageInput,
  SendMessage,
  SendIcon,
} from '@/styles/common/Chat';
import { Chat } from '@/components';
import {
  ChangeEventHandler,
  useEffect,
  KeyboardEvent,
  RefObject,
  useCallback,
} from 'react';
import { LogProps } from '@/containers/roomlist/Chat';

interface Props {
  log: LogProps[];
  message: string;
  onChange: ChangeEventHandler;
  onClick: () => void;
  chatBoxRef: RefObject<HTMLDivElement>;
  inputRef: RefObject<HTMLInputElement>;
}

const ChatBox = ({
  log,
  message,
  onChange,
  onClick,
  chatBoxRef,
  inputRef,
}: Props) => {
  const scrollToBottom = useCallback(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chatBoxRef]);

  const handleEnter = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onClick();
      }
    },
    [onClick]
  );

  useEffect(() => {
    scrollToBottom();
  }, [log, scrollToBottom]);

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
