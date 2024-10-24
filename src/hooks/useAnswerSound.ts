import { useEffect, useState } from 'react';
import { Howl } from 'howler';
import { getR2URL } from '@/services/api';

const list: string[] = [
  '/assets/sound-effects/lossy/game_correct_variant1.webm',
  '/assets/sound-effects/lossy/game_correct_variant2.webm',
  '/assets/sound-effects/lossy/game_correct_variant3.webm',
  '/assets/sound-effects/lossy/game_correct_variant4.webm',
  '/assets/sound-effects/lossy/game_correct_variant5.webm',
  '/assets/sound-effects/lossy/game_correct_variant6.webm',
  '/assets/sound-effects/lossy/game_correct_variant7.webm',
  '/assets/sound-effects/lossy/game_correct_variant8.webm',
  '/assets/sound-effects/lossy/game_correct_variant9.webm',
  '/assets/sound-effects/lossy/game_correct_variant10.webm',
];

function useAnswerSound(volume: number = 1): Howl[] | undefined {
  const [sound, setSound] = useState<Howl[]>([]);

  useEffect(() => {
    const copy: Howl[] = [];
    list.map((item) => {
      const newSound = new Howl({
        src: getR2URL(item),
      });
      newSound.volume(volume);
      copy.push(newSound);
    });
    setSound(copy);
  }, [volume]);
  useEffect(() => {}, [sound]);
  return sound;
}

export default useAnswerSound;
