import { MouseEvent, useEffect, useState } from 'react';
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
import { selectUserInfo } from '@/redux/user/userSlice';
import { useSelector } from 'react-redux';
import { client, getR2URL } from '@/services/api';
import { getIcon } from '@/modules/UserInfo';

interface Props {
  user: any;
  isLogined: boolean;
  onModal: (e: MouseEvent<HTMLElement>) => void;
  start: (e: MouseEvent<HTMLElement>) => void;
  logout: (e: MouseEvent<HTMLElement>) => void;
}

const MainForm = ({ isLogined, onModal, logout, start, user }: Props) => {
  const [currentIcon, setCurrentIcon] = useState(getIcon(0));

  useEffect(() => {
    const newIcon = getIcon(user.score as number, user.provider as any);
    setCurrentIcon(newIcon);
  }, [user.score, user.provider]);

  /*const waktaLogin = async (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const { data } = await client.get('auth/wakta');
    window.location.href = data.url;
  };*/

  return (
    <WrapForm onClick={onModal}>
      <GameStart onClick={start}>
        {isLogined ? '게임 시작' : '로그인'}
      </GameStart>
      {
        isLogined ? (
          <Player onClick={logout}>
            <Rank src={currentIcon} />
            <Line />
            <PlayerName>{user.name}</PlayerName>
            <Link href="/">
              <LogOut src={getR2URL('/assets/icons/logout.svg')} />
            </Link>
          </Player>
        ) : null
        /*  
        <LogIn onClick={waktaLogin}>
          <Wakgames src={getR2URL('/assets/icons/wakgames.svg')} />
          <LoginName>왁타버스 게임즈로 로그인</LoginName>
        </LogIn>
        */
      }
    </WrapForm>
  );
};

export default MainForm;
