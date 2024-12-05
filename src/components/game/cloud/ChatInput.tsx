import { getR2URL } from '@/services/api';
import {
  InputContainer,
  MessageBlock,
  MessageInput,
  SendIcon,
  SendMessage,
} from '@/styles/cloud/ChatInput';

const ChatInput = () => {
  return (
    <InputContainer>
      <MessageBlock>
        <MessageInput />
        <SendMessage>
          <SendIcon src={getR2URL('/assets/icons/send.svg')} />
        </SendMessage>
      </MessageBlock>
    </InputContainer>
  );
};

export default ChatInput;
