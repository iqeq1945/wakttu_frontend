import { MouseEvent } from "react";
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
} from "@/styles/main/MainForm";
import Link from "next/link";
import { selectUserInfo } from "@/redux/user/userSlice";
import { useSelector } from "react-redux";

interface Props {
  isLogined: boolean;
  onModal: (e: MouseEvent<HTMLElement>) => void;
  start: (e: MouseEvent<HTMLElement>) => void;
  logout: (e: MouseEvent<HTMLElement>) => void;
}

const MainForm = ({ isLogined, onModal, logout, start }: Props) => {
  const user = useSelector(selectUserInfo);

  return (
    <WrapForm onClick={onModal}>
      <GameStart onClick={start}>
        {isLogined ? "게임 시작" : "로그인"}
      </GameStart>
      {isLogined ? (
        <Player onClick={logout}>
          <Rank src="/assets/amoeba.svg" />
          <Line />
          <PlayerName>{user.name}</PlayerName>
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
