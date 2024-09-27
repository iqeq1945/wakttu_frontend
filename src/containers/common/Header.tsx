import { Header as CHeader, Option } from '@/components';
import { getIcon } from '@/modules/UserInfo';
import {
  selectVolume,
  setBgmVolume,
  setEffectVolume,
  setVoiceVolume,
} from '@/redux/audio/audioSlice';
import { clearGame, selectGame } from '@/redux/game/gameSlice';
import { closeModal, openModal, selectModal } from '@/redux/modal/modalSlice';
import { clearRoomInfo, selectRoomInfo } from '@/redux/roomInfo/roomInfoSlice';
import { selectUserInfo } from '@/redux/user/userSlice';
import { exit } from '@/services/socket/socket';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MouseEvent } from 'react';

const Header = () => {
  const [isConnected, setIsConnected] = useState(false);
  const user = useSelector(selectUserInfo);
  const game = useSelector(selectGame);
  const roomInfo = useSelector(selectRoomInfo);
  const router = useRouter();
  const dispatch = useDispatch();
  const [icon, setIcon] = useState(getIcon(0, undefined));
  const modal = useSelector(selectModal);
  const audio = useSelector(selectVolume);

  const goRouter = useCallback(
    async (src: string = '/') => {
      await router.push(src);
      if (game.host !== '' || roomInfo.id) {
        await exit(roomInfo.id as string);
        await dispatch(clearGame());
        await dispatch(clearRoomInfo());
      }
    },
    [dispatch, game.host, roomInfo.id, router]
  );

  const onModal = () => {
    dispatch(openModal('OPTION'));
  };

  const offModal = () => {
    dispatch(closeModal());
  };

  const onBgmChange = (e: MouseEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    dispatch(setBgmVolume(Number(value)));
  };

  const onEffectChange = (e: MouseEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    dispatch(setEffectVolume(Number(value)));
  };

  const onVoiceChange = (e: MouseEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    dispatch(setVoiceVolume(Number(value)));
  };

  useEffect(() => {
    setIsConnected(true);
  }, []);

  useEffect(() => {
    setIcon(
      getIcon(
        user.score ? user.score : 0,
        user.provider ? user.provider : undefined
      )
    );
  }, [user]);

  return (
    <>
      {isConnected && (
        <CHeader user={user} goRouter={goRouter} onModal={onModal} />
      )}
      {modal.modalType === 'OPTION' && modal.open && (
        <Option
          audio={audio}
          offModal={offModal}
          onBgmChange={onBgmChange}
          onEffectChange={onEffectChange}
          onVoiceChange={onVoiceChange}
        />
      )}
    </>
  );
};

export default Header;
