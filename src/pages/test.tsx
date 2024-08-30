import { useCallback, useState } from 'react';

const Test = () => {
  const count = 100;
  const [score, setScore] = useState(0);

  const enter = useCallback(() => {
    let num = count;
    const timeId = setInterval(() => {
      if (num <= 0) clearInterval(timeId);
      setScore((prev) => prev + 1);
      num -= 1;
    }, 5);
  }, []);
  return (
    <>
      {score} <button onClick={enter}>버튼</button>
    </>
  );
};

export default Test;
