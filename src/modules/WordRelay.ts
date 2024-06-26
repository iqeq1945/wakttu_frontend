import { hangulTools } from './Hangul';

const { isHangul, dueum, toChoseong, toJungseong, toJongseong, disintegrate } = hangulTools();

/**
 * 한글 검사
 */
const validateHangul = (word: string): boolean => {
  return isHangul(word);
};

/**
 * 두음 법칙 검사
 * @returns True : 통과, False: 두음법칙 적용안됨
 */
const validateDueum = (original: string, input: string): boolean => {
  const lastChar = original.charAt(original.length - 1);
  const firstChar = input.charAt(0);
  if (lastChar === firstChar) {
    return true
  }
  const modifiedFirstChar = dueum(lastChar);
  return firstChar === modifiedFirstChar;
};

/**
 * 한글자 단어 , 초,중,종성이 빠졌는지 검사
 * @param input 입력된 단어
 * @return True : 단일 자모가 아닌 경우, False: 단일 자모인 경우
 */
const validateHangulCombination = (input: string): boolean => {
  if (input.length === 1) return false;
  for (const char of input) {
    const disintegrated = disintegrate(char);
    if (Array.isArray(disintegrated)) {
      const [choseong, jungseong, jongseong] = disintegrated;
      if (!choseong || !jungseong || (disintegrated.length === 3 && !jongseong)) {
        return false;
      }
    } else {
      if (!isHangul(disintegrated)) {
        return false
      }
    }
  }
  return true;
};

/**
 * @param original 기존 단어
 * @param input 입력된 단어
 * @returns True : 올바른 단어, False: 잘못된 단어
 */
export const wordRelay = (original: string, input: string): { isValid: boolean; message: string } => {
  if (!validateHangul(original) || !validateHangul(input)) {
    return { isValid: false, message: '입력된 단어가 올바른 한글이 아닙니다.' };
  }

  if (!validateDueum(original, input)) {
    return { isValid: false, message: '두음법칙이 적용되지 않은 단어입니다.' };
  }

  if (!validateHangulCombination(input)) {
    return { isValid: false, message: '유효하지 않은 한글입니다.' };
  }

  return { isValid: true, message: '입력된 단어는 유효합니다.' };
};
