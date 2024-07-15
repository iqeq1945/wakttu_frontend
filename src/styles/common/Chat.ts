import styled from "styled-components";
import { COLORS } from "../theme";

const CChat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  width: 62rem;
  height: 22.0625rem;

  border-radius: 1rem;
  border: 2px solid ${COLORS["gray-4"]};
  background: ${COLORS.bg};
`;

const ChatLog = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${COLORS["gray-4"]};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    box-shadow: inset 0 0 5px ${COLORS["gray-3"]};
    border-radius: 4px;
    border-left: 1.5px solid transparent;
    border-right: 1.5px solid transparent;
  }
`;

const PlayerChat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MessageBlock = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-radius: 0.5rem;
  border: 1px solid ${COLORS["gray-4"]};
  background: ${COLORS["gray-5"]};
`;

const MessageInput = styled.input`
  display: -webkit-box;
  width: 51rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;

  border: none;
  background: ${COLORS["gray-5"]};
`;

const SendMessage = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;

  border-radius: 0.5rem;
  background: ${COLORS.primary};

  cursor: pointer;
`;

const SendIcon = styled.img`
  fill: ${COLORS.bg};
  width: 1.1004rem;
  height: 1.1004rem;
`;
export {
  CChat,
  ChatLog,
  PlayerChat,
  MessageBlock,
  MessageInput,
  SendMessage,
  SendIcon,
};
