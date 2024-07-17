import { MouseEvent } from 'react';
import {
  GameStart,
  WrapForm,
  Player,
  PlayerName,
  Rank,
  Line,
  LogOut,
  Wakgames,
  LogIn,
  LoginName,
} from '@/styles/main/MainForm';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { openModal } from '@/redux/modal/modalSlice';
interface Props {
  isLogined: boolean;
}

const MainForm = ({ isLogined }: Props) => {
  const dispatch = useDispatch();

  const onModal = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(openModal('MAIN_MODAL'));
  };

  return (
    <WrapForm onClick={onModal}>
      <GameStart>{isLogined ? '게임 시작' : '로그인'}</GameStart>
      {isLogined ? (
        <Player>
          <Rank src="/assets/amoeba.svg" />
          <Line />
          <PlayerName>플레이어</PlayerName>
          <Link href="/">
            <LogOut src="/assets/logout.svg" />
          </Link>
        </Player>
      ) : (
        <LogIn>
          <Wakgames src="/assets/wakgames.svg" />
          <LoginName>왁타버스 게임즈로 로그인</LoginName>
        </LogIn>
      )}
    </WrapForm>
  );
};

export default MainForm;
