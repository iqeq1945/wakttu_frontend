import { R2_URL } from '@/services/api';
import { Room } from '@/services/socket/socket';
import {
  Button,
  ButtonText,
  CButton,
  CHeader,
  CTitle,
  ExitButton,
  ExitIcon,
  Index,
  Title,
} from '@/styles/last/Header';
import { ChangeEvent, useEffect, useState } from 'react';
import HelpModal from '../HelpModal';
import ExitModal from '../ExitModal';
import { Option } from '@/components';
import { selectVolume, setVolume as setAudio } from '@/redux/audio/audioSlice';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  roomInfo: Room;
  exit: () => void;
}

const Header = ({ roomInfo, exit }: Props) => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [isExitOpen, setIsExitOpen] = useState(false);

  const dispatch = useDispatch();
  const audio = useSelector(selectVolume);
  const [volume, setVolume] = useState({
    bgmVolume: 0.5,
    effectVolume: 0.5,
    voiceVolume: 0.5,
  });

  const onBgmChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setVolume({ ...volume, bgmVolume: Number(value) });
  };

  const onEffectChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setVolume({ ...volume, effectVolume: Number(value) });
  };

  const onVoiceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setVolume({ ...volume, voiceVolume: Number(value) });
  };

  const onClick = () => {
    dispatch(setAudio(volume));
    setIsOptionOpen(false);
  };

  useEffect(() => {
    setVolume(audio);
  }, [audio]);

  const onConfirm = () => {
    exit();
    setIsOptionOpen(false);
  };

  return (
    <CHeader>
      <CButton>
        <Button onClick={() => setIsHelpOpen(true)}>
          <ButtonText>도움말</ButtonText>
        </Button>
        <Button onClick={() => setIsOptionOpen(true)}>
          <ButtonText>옵션</ButtonText>
        </Button>
      </CButton>
      <CTitle>
        <Index>[ {roomInfo.idx} ]</Index>
        <Title>{roomInfo.title}</Title>
      </CTitle>
      <CButton>
        <ExitButton onClick={() => setIsExitOpen(true)}>
          <ButtonText>나가기</ButtonText>
          <ExitIcon src={R2_URL + '/assets/game/game-exit.svg'} />
        </ExitButton>
      </CButton>
      {isHelpOpen && <HelpModal onClose={() => setIsHelpOpen(false)} />}
      {isOptionOpen && (
        <Option
          audio={volume}
          onClick={onClick}
          offModal={() => setIsOptionOpen(false)}
          onBgmChange={onBgmChange}
          onEffectChange={onEffectChange}
          onVoiceChange={onVoiceChange}
        />
      )}
      {isExitOpen && (
        <ExitModal
          onConfirm={onConfirm}
          onCancle={() => setIsExitOpen(false)}
        />
      )}
    </CHeader>
  );
};

export default Header;
