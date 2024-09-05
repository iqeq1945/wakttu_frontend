import OptionBox from '@/components/common/Option';
import { setBgmVolume, setEffectVolume } from '@/redux/audio/audioSlice';
import { useDispatch } from 'react-redux';
import { MouseEvent, useCallback } from 'react';
const Test = () => {
  const dispatch = useDispatch();

  const onBgmChange = useCallback(
    (e: MouseEvent<HTMLInputElement>) => {
      dispatch(setBgmVolume(Number(e.currentTarget.value)));
    },
    [dispatch]
  );

  const onEffectChange = useCallback(
    (e: MouseEvent<HTMLInputElement>) => {
      dispatch(setEffectVolume(Number(e.currentTarget.value)));
    },
    [dispatch]
  );

  return (
    <OptionBox onBgmChange={onBgmChange} onEffectChange={onEffectChange} />
  );
};

export default Test;
