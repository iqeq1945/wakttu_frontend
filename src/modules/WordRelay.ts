import { hangulTools } from './Hangul';

const { isHangul, dueum } = hangulTools();

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
 * 한글, 두음법칙 검사 함수
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

  return { isValid: true, message: '입력된 단어는 유효합니다.' };
};
