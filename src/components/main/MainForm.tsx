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
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { openModal } from "@/redux/modal/modalSlice";
import { client } from "@/services/api";

interface Props {
  isLogined: boolean;
}

const MainForm = ({ isLogined }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const onModal = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(openModal("MAIN_MODAL"));
    e.stopPropagation();
  };

  const start = (e: MouseEvent<HTMLElement>) => {
    if (isLogined) {
      e.stopPropagation();
      router.push("/roomlist");
      return;
    }
    return;
  };

  const logout = async (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    await client.get("auth/logout");
    router.reload();
    return;
  };

  return (
    <WrapForm onClick={onModal}>
      <GameStart onClick={start}>
        {isLogined ? "게임 시작" : "로그인"}
      </GameStart>
      {isLogined ? (
        <Player onClick={logout}>
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
