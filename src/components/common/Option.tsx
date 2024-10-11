import {
  Modal,
  COption,
  CVolume,
  VoulmeText,
  Range,
} from '@/styles/common/Option';
import { MouseEvent } from 'react';

interface Props {
  onBgmChange: (e: MouseEvent<HTMLInputElement>) => void;
  onEffectChange: (e: MouseEvent<HTMLInputElement>) => void;
}

const OptionBox = ({ onBgmChange, onEffectChange }: Props) => {
  return (
    <Modal>
      <COption>
        <CVolume>
          <VoulmeText>배경음</VoulmeText>
          <Range
            type="range"
            min={0}
            max={1}
            step={0.01}
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
            onClick={onEffectChange}
          />
        </CVolume>
      </COption>
    </Modal>
  );
};

export default OptionBox;
