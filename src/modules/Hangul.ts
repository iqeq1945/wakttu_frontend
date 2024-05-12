type Props = {
  isHangul: (param: string) => boolean;
  toChoseong: (param: string) => string;
  toJungseong: (param: string) => string;
  toJongseong: (param: string) => string;
  disintegrate: (param: string) => string[] | string;
  compose: (arrparam: string[]) => string;
  noConflict: () => Props;
};

export const hangulTools = (): Props => {
  const HANGUL_FIRST = '가';
  const HANGUL_LAST = '힣';
  const HANGUL_FIRST_CODE = HANGUL_FIRST.charCodeAt(0);
  const HANGUL_LAST_CODE = HANGUL_LAST.charCodeAt(0);

  const CHOSEONG = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
  const JUNGSEONG = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ';
  const JONGSEONG = 'Xㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ';

  /**
   * 문자열이 한글로만 이루어져 있는지 확인
   * @returns Boolean
   */
  const isHangul = (param: string): boolean =>
    param.split('').every(char => char >= HANGUL_FIRST && char <= HANGUL_LAST);

  /**
   * to초성, 중성, 종성 -> 문자열 추출 후 새로운 문자열 반환
   */
  const toChoseong = (param: string): string =>
    param
      .split('')
      .map(char =>
        char >= HANGUL_FIRST && char <= HANGUL_LAST
          ? CHOSEONG[Math.floor((char.charCodeAt(0) - HANGUL_FIRST_CODE) / (JUNGSEONG.length * JONGSEONG.length))]
          : char
      )
      .join('');

  const toJungseong = (param: string): string =>
    param
      .split('')
      .map(char =>
        char >= HANGUL_FIRST && char <= HANGUL_LAST
          ? JUNGSEONG[Math.floor(((char.charCodeAt(0) - HANGUL_FIRST_CODE) / JONGSEONG.length) % JUNGSEONG.length)]
          : char
      )
      .join('');

  const toJongseong = (param: string): string =>
    param
      .split('')
      .map(char =>
        char >= HANGUL_FIRST && char <= HANGUL_LAST
          ? JONGSEONG[(char.charCodeAt(0) - HANGUL_FIRST_CODE) % JONGSEONG.length]
          : char
      )
      .join('');

  /**
   문자열을 초성, 중성, 종성으로 분해
   */
  const disintegrate = (param: string): string[] | string => {
    const char = param.charCodeAt(0);
    if (char >= HANGUL_FIRST_CODE && char <= HANGUL_LAST_CODE) {
      const index = char - HANGUL_FIRST_CODE;
      if (index % JONGSEONG.length !== 0)
        return [
          CHOSEONG[Math.floor(index / (JUNGSEONG.length * JONGSEONG.length))],
          JUNGSEONG[Math.floor(index / JONGSEONG.length) % JUNGSEONG.length],
          JONGSEONG[index % JONGSEONG.length]
        ];
      else
        return [
          CHOSEONG[Math.floor(index / (JUNGSEONG.length * JONGSEONG.length))],
          JUNGSEONG[Math.floor(index / JONGSEONG.length) % JUNGSEONG.length]
        ];
    } else return param;
  };

  /**
    문자열 검사
    * 아래 주석들 검사 (1, 2, 3)
    */
  const compose = (arrparam: string[]): string => {
    if (arrparam.length === 0) return '';

    /**
    1. 한 글자 단어
    */
    if (arrparam.length === 1 || (!arrparam[1] && !arrparam[2]))
      return arrparam[0] ? arrparam[0] : '';

    /**
    2. 모음 없이 자음만 있는(중성이 없는) 경우 
    */
    const jungseongIndex = JUNGSEONG.indexOf(arrparam[1]);
    if (arrparam.length > 3 || jungseongIndex === -1) return arrparam.join('');

    /**
    3. 모음만 있는(초성, 종성이 없는) 경우 
    */
    if ((arrparam.length === 2 || arrparam[2] === null) && arrparam[0] === null)
      return arrparam[1];

    const choseongIndex = CHOSEONG.indexOf(arrparam[0]);
    if (choseongIndex === -1) return arrparam.join('');

    const jongseongIndex = arrparam[2] ? JONGSEONG.indexOf(arrparam[2]) : 0;
    if (jongseongIndex === -1) return arrparam.join('');

    return String.fromCharCode(HANGUL_FIRST_CODE + jongseongIndex + JONGSEONG.length * (jungseongIndex + JUNGSEONG.length * choseongIndex));
  };

  const noConflict = (): Props => {
    return hangulTools();
  };

  return {
    isHangul,
    toChoseong,
    toJungseong,
    toJongseong,
    disintegrate,
    compose,
    noConflict
  };
};