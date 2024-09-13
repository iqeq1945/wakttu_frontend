import { useEffect, useState } from 'react';
import { Howl } from 'howler';

interface Sound {
  [x: string]: Howl;
}

const list: { id: string; src: string }[] = [
  {
    id: '1',
    src: 'https://r2.wakttu.kr/assets/sound-effects/lossy/game_correct_variant1.webm',
  },
  {
    id: '2',
    src: 'https://r2.wakttu.kr/assets/sound-effects/lossy/game_correct_variant2.webm',
  },
];

function useWaktaSound(volume: number = 1): Sound | undefined {
  const [sound, setSound] = useState<Sound>({});

  useEffect(() => {
    const copy: Sound = {};
    list.map((item) => {
      const newSound = new Howl({
        src: item.src,
      });
      newSound.volume(volume);
      newSound.load();
      newSound.on('play', () => {
        console.log('play : ', newSound.state());
      });
      copy[item.id] = newSound;
    });
    setSound(copy);
  }, [volume]);

  useEffect(() => {
    console.log(sound);
  }, [sound]);
  return sound;
}

export default useWaktaSound;
