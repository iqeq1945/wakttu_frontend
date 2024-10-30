import { useEffect, useState } from 'react';
import { Howl } from 'howler';
import { List } from '@/modules/Voice';

const SOUND_IDS = ['i-9', 'woo-8', 'ji-10', 'l-8', 'ju-9', 'g-10', 'v-21'];

function useClickSound(volume: number = 1) {
  const [sounds, setSounds] = useState<Howl[]>([]);

  useEffect(() => {
    const selectedSounds = List()
      .filter((item) => SOUND_IDS.includes(item.id))
      .map((item) => {
        const sound = new Howl({
          src: item.src,
        });
        sound.volume(volume);
        return sound;
      });

    setSounds(selectedSounds);
  }, [volume]);

  const playRandom = () => {
    if (sounds.length > 0) {
      const randomIndex = Math.floor(Math.random() * sounds.length);
      sounds[randomIndex].play();
    }
  };

  return { play: playRandom };
}

export default useClickSound;
