/**
 * wordLength 단어길이
 * chainCount 체인수(턴 수)
 * timeLimit 제한시간
 * timeTaken 소요시간
 * wakttaWord 왁타버스 단어 여부
 */
type Props = {
  wordLength: number,
  chainCount: number,
  timeLimit: number,
  timeTaken: number,
  wakttaWord: boolean
}


const countScore = ({ wordLength, chainCount, timeLimit, timeTaken, wakttaWord }: Props) => {
  let wakWord;
  if (wakttaWord) { wakWord = 1.58 } else { wakWord = 1 }
  const calculate = 2 * ((5 + 7 * wordLength) ** 0.74 + 0.88 * chainCount) * (1 - timeTaken / (2 * timeLimit)) * (wakWord)
  return calculate
}

export default countScore;