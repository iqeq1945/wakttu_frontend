import {
  ChatBox,
  Log,
  PlayerContent,
  PlayerName,
} from '@/styles/cloud/ChatLog';
import { useCallback, useEffect, useRef } from 'react';

const ChatLog = () => {
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chatBoxRef]);

  useEffect(() => {
    scrollToBottom();
  }, [scrollToBottom]);

  return (
    <ChatBox ref={chatBoxRef}>
      <Log>
        <PlayerName>아이네</PlayerName>
        <PlayerContent>대가리!</PlayerContent>
      </Log>
      <Log>
        <PlayerName>비챤</PlayerName>
        <PlayerContent>
          대가리! dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </PlayerContent>
      </Log>
      <Log>
        <PlayerName>비챤</PlayerName>
        <PlayerContent>
          대가리! dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </PlayerContent>
      </Log>
      <Log>
        <PlayerName>비챤</PlayerName>
        <PlayerContent>
          대가리! dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </PlayerContent>
      </Log>
      <Log>
        <PlayerName>비챤</PlayerName>
        <PlayerContent>
          대가리! dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </PlayerContent>
      </Log>
      <Log>
        <PlayerName>비챤</PlayerName>
        <PlayerContent>
          대가리! dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </PlayerContent>
      </Log>
      <Log>
        <PlayerName>비챤</PlayerName>
        <PlayerContent>
          대가리! dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </PlayerContent>
      </Log>
    </ChatBox>
  );
};

export default ChatLog;
