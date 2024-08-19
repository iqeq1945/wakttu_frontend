import {
  ChatLog,
  CChat,
  MessageBlock,
  MessageInput,
  SendMessage,
  SendIcon,
} from '@/styles/last/Chat';
import { Answer, GChat } from '@/components';
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
  onMessage: () => void;
  onAnswer: () => void;
  chatBoxRef: RefObject<HTMLDivElement>;
  inputRef: RefObject<HTMLInputElement>;
  myTurn: boolean;
}

const ChatBox = ({
  log,
  message,
  onChange,
  onMessage,
  onAnswer,
  chatBoxRef,
  inputRef,
  myTurn,
}: Props) => {
  const scrollToBottom = useCallback(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chatBoxRef]);

  const handleEnter = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        if (myTurn) onMessage();
        else onAnswer();
      }
    },
    [myTurn, onAnswer, onMessage]
  );

  useEffect(() => {
    scrollToBottom();
  }, [log, scrollToBottom]);

  return (
    <>
      {myTurn ? <Answer chat={message} /> : ''}
      <CChat>
        <ChatLog ref={chatBoxRef}>
          {log.map((element, idx) => {
            return (
              <GChat
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
            maxLength={100}
            onChange={onChange}
            onKeyDown={handleEnter}
            autoComplete="off"
          />
          {myTurn ? (
            <SendMessage onClick={onAnswer}>
              <SendIcon src="/assets/icons/send.svg" />
            </SendMessage>
          ) : (
            <SendMessage onClick={onMessage}>
              <SendIcon src="/assets/icons/send.svg" />
            </SendMessage>
          )}
        </MessageBlock>
      </CChat>
    </>
  );
};

export default ChatBox;
