import data from '@/modules/Slang.json';

const { Slang } = data;

export const list = [...Slang];

/**
 * Determine if a string contains slang words.
 * 비속어 인지 확인 해주는 함수
 * @param {sentence} string - String to evaluate for slang.
 */
export const isInSlang = (sentence: string) => {
  return list.some((word) => {
    const wordExp = new RegExp(word.trim(), 'g');
    return wordExp.test(sentence);
  });
};

/**
 * Evaluate a string for slang and return an edited version.
 * 비속어를 가지고 있는지 확인하고, 비속어가 있을시 수정하여 반환해줌.
 * @param {sentence} string - Sentence to filter.
 */
export const clean = (sentence: string) => {
  return isInSlang(sentence)
    ? '지나가던 [전투 ***] 에 의해 검열되었습니다.'
    : sentence;
};

export const cleanTitle = (sentence: string) => {
  return isInSlang(sentence) ? '제목 검열은 젠황' : sentence;
};
