import {
  Modal,
  COption,
  CVolume,
  VoulmeText,
  Range,
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
        <CVolume>
          <VoulmeText>배경음</VoulmeText>
          <Range
            type="range"
            min={0}
            max={1}
            step={0.01}
            defaultValue={audio.bgmVolume}
            onClick={onBgmChange}
          />
        </CVolume>
        <CVolume>
          <VoulmeText>효과음</VoulmeText>
          <Range
            type="range"
            min={0}
            max={1}
            step={0.01}
            defaultValue={audio.effectVolume}
            onClick={onEffectChange}
          />
        </CVolume>
        <CVolume>
          <VoulmeText>음 성</VoulmeText>
          <Range
            type="range"
            min={0}
            max={1}
            step={0.01}
            defaultValue={audio.voiceVolume}
            onClick={onVoiceChange}
          />
        </CVolume>
      </COption>
    </Modal>
  );
};

export default OptionBox;
