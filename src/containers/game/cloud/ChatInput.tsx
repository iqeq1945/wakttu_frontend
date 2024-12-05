import { CChatInput } from '@/components';
import useInput from '@/hooks/useInput';
import { clean } from '@/modules/Slang';
import { selectPause, setAnswer } from '@/redux/answer/answerSlice';
import { selectGame } from '@/redux/game/gameSlice';
import { selectRoomId } from '@/redux/roomInfo/roomInfoSlice';
import { selectTimer } from '@/redux/timer/timerSlice';
import { sendChat } from '@/services/socket/socket';
import { ChangeEvent, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface InputProps {
  chat: string;
}

const ChatInput = () => {
  const dispatch = useDispatch();
  const game = useSelector(selectGame);
  const roomId = useSelector(selectRoomId) as string;
  const timer = useSelector(selectTimer);
  const pause = useSelector(selectPause);

  const { inputs, setInputs, onInputChange } = useInput<InputProps>({
    chat: '',
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const onSendAnswer = useCallback(() => {
    if (inputs.chat) {
      sendChat({
        roomId,
        chat: clean(inputs.chat),
        roundTime: null,
        score: null,
      });
    }
    setInputs({ chat: '' });
    if (inputRef.current) inputRef.current.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    dispatch,
    game.target,
    inputs.chat,
    roomId,
    timer.countTime,
    timer.roundTime,
  ]);

  const onSendMessage = useCallback(() => {
    if (inputs.chat) {
      const chat = clean(inputs.chat);
      sendChat({
        roomId,
        chat: chat.includes(game.target)
          ? '전투***가 정답을 가로챘습니다.'
          : chat,
        roundTime: null,
        score: null,
      });
    }
    setInputs({ chat: '' });
    if (inputRef.current) inputRef.current.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game.target, inputs.chat, roomId]);

  const handleEnter = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.nativeEvent.isComposing) return;
      if (e.key === 'Enter') {
        if (pause) onSendAnswer();
        else onSendMessage();
      }
    },
    [pause, onSendAnswer, onSendMessage]
  );

  return (
    <CChatInput
      pause={pause}
      message={inputs.chat}
      inputRef={inputRef}
      onChange={onInputChange}
      onMessage={onSendMessage}
      onAnswer={onSendAnswer}
      handleEnter={handleEnter}
    />
  );
};

export default ChatInput;
