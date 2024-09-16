import { useEffect, useState } from 'react';
import { Howl } from 'howler';

function useEffectSound(src: string, volume: number = 1): Howl | undefined {
  const [sound, setSound] = useState<Howl>();

  useEffect(() => {
    const newSound = new Howl({
      src: process.env.NEXT_PUBLIC_R2_URL + src,
    });
    newSound.volume(volume);
    //newSound.load();

    setSound(newSound);

    return () => {
      newSound.stop();
      newSound.unload();
      setSound(undefined);
    };
  }, [src, volume]);

  return sound;
}

export default useEffectSound;
