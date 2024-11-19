import {
  Answer,
  AnswerText,
  Board,
  CLeft,
  CMain,
  CRight,
  CTag,
  GaugeBar,
  Hint,
  HintText,
  Info,
  LEye,
  Middle,
  Mouse,
  Remain,
  REye,
  Tag,
  Target,
  TimerBar,
  TimerIcon,
  CTimer,
  Round,
} from '@/styles/bell/Main';
import { Game as TypeGame } from '@/services/socket/socket';
import { Answer as TypeAnswer } from '@/redux/answer/answerSlice';
import { Timer } from '@/redux/timer/timerSlice';
import Character from './Character';
import { getR2URL } from '@/services/api';
import { useEffect } from 'react';
import useEffectSound from '@/hooks/useEffectSound';
import { useSelector } from 'react-redux';
import { selectEffectVolume } from '@/redux/audio/audioSlice';
interface Props {
  answer: TypeAnswer;
  game: TypeGame;
  quiz?: { [x: string]: any; _id: string; choseong: string; hint: string[] };
  timer: Timer;
}

const Game = ({ game, quiz, answer, timer }: Props) => {
  const effectVolume = useSelector(selectEffectVolume);
  const hintSound = useEffectSound(
    '/assets/sound-effects/lossy/bell_hint.webm',
    effectVolume
  );

  useEffect(() => {
    if (
      timer.countTime === 10000 ||
      timer.countTime === 15000 ||
      timer.countTime === 20000
    ) {
      if (hintSound) hintSound.play();
    }
  }, [timer.countTime, hintSound]);

  return (
    <CMain>
      <Character
        src={getR2URL('/assets/items/S-3.svg')}
        user={undefined}
        left={-4}
      />
      <Character
        src={getR2URL('/assets/items/S-4.svg')}
        user={undefined}
        left={8}
      />
      <Character
        src={getR2URL('/assets/items/S-5.svg')}
        user={undefined}
        left={20}
      />
      <Character
        src={getR2URL('/assets/items/S-6.svg')}
        user={undefined}
        right={20}
      />
      <Character
        src={getR2URL('/assets/items/S-7.svg')}
        user={undefined}
        right={8}
        width={6.07094}
      />
      <Character
        src={getR2URL('/assets/items/S-8.svg')}
        user={undefined}
        right={-4}
      />
      <CLeft>
        <Round>Round {game.round}</Round>
        <LEye src={getR2URL('/assets/game/eye.svg')} alt="왼쪽 눈 아이콘" />
        <REye src={getR2URL('/assets/game/eye.svg')} alt="오른쪽 눈 아이콘" />
        <Mouse>
          <CTag>
            {answer.pause &&
              quiz?.tag?.map((tag: string) => (
                <Tag key={tag} tag={tag}>
                  {tag}
                </Tag>
              ))}
          </CTag>
          <Target>{answer.pause ? quiz?.choseong : ''}</Target>
        </Mouse>
      </CLeft>
      <Middle>
        <Board>
          <Answer>
            <AnswerText>{answer.answer ? answer.answer : ''}</AnswerText>
          </Answer>
        </Board>
        <Info>
          <TimerIcon src={getR2URL('/assets/game/bell-timer.svg')} alt="타이머 아이콘" />
          <CTimer>
            <Remain>
              {((timer.roundTime - timer.countTime) / 1000.0).toFixed(1)}초
            </Remain>
            <TimerBar>
              <GaugeBar gauge={timer.countTime} pause={answer.pause}></GaugeBar>
            </TimerBar>
          </CTimer>
        </Info>
      </Middle>
      <CRight>
        {quiz &&
          quiz.hint?.map((item, idx) => {
            if (idx === 0 && timer.countTime >= 10000)
              return (
                <Hint key={idx}>
                  <HintText>{item}</HintText>
                </Hint>
              );
            else if (idx === 1 && timer.countTime >= 15000) {
              return (
                <Hint key={idx}>
                  <HintText>{item}</HintText>
                </Hint>
              );
            }
          })}
        {timer.countTime >= 20000 && (
          <Hint>
            <HintText>{quiz?.mean}</HintText>
          </Hint>
        )}
      </CRight>
    </CMain>
  );
};

export default Game;
