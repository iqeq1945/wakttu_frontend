type Props = {
  isHangul: (param: string) => boolean;
  toChoseong: (param: string) => string;
  toJungseong: (param: string) => string;
  toJongseong: (param: string) => string;
  disintegrate: (param: string) => string[] | string;
  dueum: (s: string) => string;
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
   * 문자열이 한글로만 이루어져 있는지 확인한다.
   * @param param - 확인할 문자열
   * @returns 문자열이 한글로만 이루어져 있으면 true, 그렇지 않으면 false
   */
  const isHangul = (param: string): boolean =>
    param.split('').every(char => char >= HANGUL_FIRST && char <= HANGUL_LAST);

  /**
   * 문자열에서 초성(혹은 중성, 종성)만 추출하여 새로운 문자열을 반환한다.
   * @param param - 초성(혹은 중성, 종성)을 추출할 문자열
   * @returns 초성(혹은 중성, 종성)만으로 이루어진 새로운 문자열
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
   * 한글 문자를 초성, 중성, 종성으로 분해한다.
   * @param param - 분해할 한글 문자열
   * @returns 분해된 초성, 중성, 종성 배열 또는 원래 문자열
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
   * 초성, 중성, 종성 배열을 한글 문자로 조합한다.
   * @param arrparam - 조합할 초성, 중성, 종성 배열
   * @returns 조합된 한글 문자 또는 원래 배열의 문자열
   */
  const compose = (arrparam: string[]): string => {
    if (arrparam.length === 0) return '';

    /*한 글자 단어*/
    if (arrparam.length === 1 || (!arrparam[1] && !arrparam[2]))
      return arrparam[0] ? arrparam[0] : '';

    /*모음 없이 자음만 있는(중성이 없는) 경우 */
    const jungseongIndex = JUNGSEONG.indexOf(arrparam[1]);
    if (arrparam.length > 3 || jungseongIndex === -1) return arrparam.join('');

    /*모음만 있는(초성, 종성이 없는) 경우 */
    if ((arrparam.length === 2 || arrparam[2] === null) && arrparam[0] === null)
      return arrparam[1];

    const choseongIndex = CHOSEONG.indexOf(arrparam[0]);
    if (choseongIndex === -1) return arrparam.join('');

    const jongseongIndex = arrparam[2] ? JONGSEONG.indexOf(arrparam[2]) : 0;
    if (jongseongIndex === -1) return arrparam.join('');

    return String.fromCharCode(HANGUL_FIRST_CODE + jongseongIndex + JONGSEONG.length * (jungseongIndex + JUNGSEONG.length * choseongIndex));
  };


  /**
 * 문자열의 첫 글자가 두음법칙에 해당하는 경우 이를 수정하여 반환한다.
 * 예시) "녀"->"여", "렬"->"열"
 * @param param - 두음법칙을 적용할 문자열
 * @returns 두음법칙이 적용된 새로운 문자열 또는 원래 문자열
 */
  const dueum = (param: string): string => {
    if (!param) return '';
    const char = param.charCodeAt(0);
    if (char < HANGUL_FIRST_CODE || char > HANGUL_LAST_CODE) return param;
    switch (Math.floor((char - HANGUL_FIRST_CODE) / JONGSEONG.length)) {
      /* 녀, 뇨, 뉴, 니 */
      case 48: case 54: case 59: case 62:
        return String.fromCharCode(char + 5292) + param.slice(1);
      /* 랴, 려, 례, 료, 류, 리 */
      case 107: case 111: case 112: case 117: case 122: case 125:
        return String.fromCharCode(char + 3528) + param.slice(1);
      /* 라, 래, 로, 뢰, 루, 르 */
      case 105: case 106: case 113: case 116: case 118: case 123:
        return String.fromCharCode(char - 1764) + param.slice(1);
      default:
        return param;
    }
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
    dueum,
    compose,
    noConflict
  };
};