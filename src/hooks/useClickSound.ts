import { useEffect, useState } from 'react';
import { Howl } from 'howler';
import { getR2URL } from '@/services/api';

const SOUND_IDS = [
  'ui_click_i',
  'ui_click_ji',
  'ui_click_l',
  'ui_click_ju',
  'ui_click_g',
  'ui_click_v',
];

function useClickSound(volume: number = 1) {
  const [sounds, setSounds] = useState<Howl[]>([]);

  useEffect(() => {
    const selectedSounds = SOUND_IDS.map((item) => {
      const sound = new Howl({
        src: getR2URL('/assets/sound-effects/lossy/' + item + '.webm'),
      });
      sound.volume(volume);
      return sound;
    });

    setSounds(selectedSounds);
    console.log(selectedSounds);
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
