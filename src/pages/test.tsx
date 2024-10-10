import ResultTeam from '@/components/room/ResultTeam';
import ResultSolo from '@/components/room/ResultSolo';
const Test = () => {
  return (
    <ResultSolo
      list={[
        {
          rank: 1,
          name: '우왁굳',
          userId: '18100',
          score: 800,
          exp: 0,
          team: 'woo',
        },
        {
          rank: 1,
          name: '우왁굳2',
          userId: '18120',
          score: 800,
          exp: 0,
          team: 'woo',
        },
        {
          rank: 2,
          name: '우왁굳3',
          userId: '18120',
          score: 800,
          exp: 0,
          team: 'gomem',
        },
        {
          rank: 2,
          name: '우왁굳4',
          userId: '18122',
          score: 800,
          exp: 0,
          team: 'gomem',
        },
        {
          rank: 3,
          name: '우왁굳3',
          userId: '18120',
          score: 400,
          exp: 0,
          team: 'isedol',
        },
        {
          rank: 3,
          name: '우왁굳4',
          userId: '18122',
          score: 400,
          exp: 0,
          team: 'isedol',
        },
        {
          rank: 4,
          name: '우왁굳3',
          userId: '18120',
          score: 400,
          exp: 0,
          team: 'isedol',
        },
        {
          rank: 4,
          name: '우왁굳4',
          userId: '18122',
          score: 400,
          exp: 0,
          team: 'academy',
        },
        {
          rank: 4,
          name: '우왁굳4',
          userId: '18122',
          score: 400,
          exp: 0,
          team: 'academy',
        },
        {
          rank: 4,
          name: '우왁굳4',
          userId: '18122',
          score: 400,
          exp: 0,
          team: 'academy',
        },
      ]}
      offModal={function (): void {
        throw new Error('Function not implemented.');
      }}
      user={{
        id: '18100',
        score: 25500,

        provider: 'local',
      }}
    />
  );
};

export default Test;
