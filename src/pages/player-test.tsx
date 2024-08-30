import useSound from '@/hooks/useSound';

const Test = () => {
  const sound = useSound('/assets/bgm/lossy/ui_main.webm', 1, 0);
  const sound_ingame = useSound('/assets/bgm/lossy/ui_in-game.webm', 1, 0);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (sound && sound.playing()) sound.stop();
          if (sound_ingame && sound_ingame.playing()) sound_ingame.stop();

          sound!.play();
        }}
      >
        Main UI
      </button>

      <button
        type="button"
        onClick={() => {
          if (sound_ingame && sound_ingame.playing()) sound_ingame.stop();
          if (sound && sound.playing()) sound.stop();

          sound_ingame!.play();
        }}
      >
        In Game UI
      </button>
    </>
  );
};

export default Test;
