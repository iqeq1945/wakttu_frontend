import useWaktaSound from '@/hooks/useWaktaSound';
const Test = () => {
  const sound = useWaktaSound(0.5);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (sound) sound['1'].play();
        }}
      >
        sound 1
      </button>

      <button
        type="button"
        onClick={() => {
          if (sound) sound['2'].play();
        }}
      >
        sound 2
      </button>
    </>
  );
};

export default Test;
