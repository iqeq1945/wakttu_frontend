import { useEffect, useState } from 'react';
import { Howl } from 'howler';

function useSound(
  src: string,
  volume: number = 1,
  fadeoutTime: number = 0
): Howl | undefined {
  const [sound, setSound] = useState<Howl>();

  useEffect(() => {
    const newSound = new Howl({ src: process.env.NEXT_PUBLIC_R2_URL + src });
    newSound.volume(volume);
    newSound.load();

    setSound(newSound);

    newSound.on('play', () => {
      const fadeouttime = fadeoutTime;

      setTimeout(
        () => newSound.fade(volume, 0, fadeouttime),
        (newSound.duration() - newSound.seek()) * 1000 - fadeouttime
      );
    });

    return () => {
      newSound.stop();
      newSound.unload();
      setSound(undefined);
    };
  }, [src, volume, fadeoutTime]);

  return sound;
}

export default useSound;
