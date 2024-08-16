type Props = {
  wordLength: number;
  chainCount: number;
  timeLimit: number;
  remainingTime: number;
  wakttaWord: boolean;
};

/**
 * 점수 계산 함수
 * @params wordLength 단어길이
 * @params chainCount 체인수(턴 수)
 * @params timeLimit 제한시간 (밀리 초)
 * @params remainingTime 남은 시간 (밀리 초)
 * @params wakttaWord 왁타버스 단어 여부
 * timeTaken 소요시간 (밀리 초 단위이기 때문에 %1000을 해준다. 단위가 달라지면 나누는 단위 바꾸기)
 * @return number (소수점 첫 번째 자리 반올림)
 */
const countScore = ({
  wordLength,
  chainCount,
  timeLimit,
  remainingTime,
  wakttaWord,
}: Props) => {
  let wakWord;
  if (wakttaWord) {
    wakWord = 1.58;
  } else {
    wakWord = 1;
  }
  const timeTaken = (timeLimit - remainingTime) / 1000;
  const calculate =
    2 *
    ((5 + 7 * wordLength) ** 0.74 + 0.88 * chainCount) *
    (1 - timeTaken / ((2 * timeLimit) / 1000)) *
    wakWord;
  return calculate.toFixed();
};

export default countScore;
