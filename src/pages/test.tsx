import ResultTeam from '@/components/room/ResultTeam';
import ResultSolo from '@/components/room/ResultSolo';
const Test = () => {
  return (
    <ResultSolo
      list={[]}
      offModal={function (): void {
        throw new Error('Function not implemented.');
      }}
    />
  );
};

export default Test;
