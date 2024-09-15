import { useEffect, useState } from 'react';
import { Howl } from 'howler';
import { List } from '@/modules/Voice';

interface Sound {
  [x: string]: Howl;
}
const list: { id: string; src: string }[] = List();

function useWaktaSound(volume: number = 1): Sound | undefined {
  const [sound, setSound] = useState<Sound>({});

  useEffect(() => {
    const copy: Sound = {};
    list.map((item) => {
      const newSound = new Howl({
        src: item.src,
      });
      newSound.volume(volume);
      copy[item.id] = newSound;
    });
    setSound(copy);
  }, [volume]);

  return sound;
}

export default useWaktaSound;
