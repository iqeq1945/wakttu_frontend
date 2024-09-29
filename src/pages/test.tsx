import { client, updatePlayCount, updateResult } from '@/services/api';

const Test = () => {
  const onClick = async () => {
    await updateResult([
      { type: 'WORD', word: { type: 'WOO' } },
      { type: 'WORD', word: { type: 'VIICHAN' } },
    ]);
  };
  return <button onClick={onClick}>버튼</button>;
};

export default Test;
