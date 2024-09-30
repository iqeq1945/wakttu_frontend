import { getR2URL } from '@/services/api';
import {
  Modal,
  COption,
  CVolume,
  VoulmeText,
  Title,
  Setting,
  TitleText,
  VInput,
  CButton,
  Cancle,
  SetButton,
} from '@/styles/common/Option';
import { MouseEvent } from 'react';

interface Props {
  audio: { bgmVolume: number; effectVolume: number; voiceVolume: number };
  offModal: () => void;
  onBgmChange: (e: MouseEvent<HTMLInputElement>) => void;
  onEffectChange: (e: MouseEvent<HTMLInputElement>) => void;
  onVoiceChange: (e: MouseEvent<HTMLInputElement>) => void;
}

const OptionBox = ({
  audio,
  offModal,
  onBgmChange,
  onEffectChange,
  onVoiceChange,
}: Props) => {
  return (
    <Modal onClick={offModal}>
      <COption onClick={(e) => e.stopPropagation()}>
        <Title>
          <Setting src={getR2URL('/assets/icons/setting')} />
          <TitleText>환경설정</TitleText>
        </Title>
        <CVolume>
          <VoulmeText>배경음 볼륨</VoulmeText>
          <VInput
            type="range"
            min={0}
            max={1}
            step={0.01}
            defaultValue={audio.bgmVolume}
            onClick={onBgmChange}
          />
        </CVolume>
        <CVolume>
          <VoulmeText>효과음 볼륨</VoulmeText>
          <VInput
            type="range"
            min={0}
            max={1}
            step={0.01}
            defaultValue={audio.effectVolume}
            onClick={onEffectChange}
          />
        </CVolume>
        <CVolume>
          <VoulmeText>음 성 볼륨</VoulmeText>
          <VInput
            type="range"
            min={0}
            max={1}
            step={0.01}
            defaultValue={audio.voiceVolume}
            onClick={onVoiceChange}
          />
        </CVolume>
        <CButton>
          <SetButton>적용하기</SetButton>
          <Cancle>취소</Cancle>
        </CButton>
      </COption>
    </Modal>
  );
};

export default OptionBox;
