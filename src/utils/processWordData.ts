import { RelevantPersonArray, Word_, WordProps, Words_ } from "@/components/dictionary/Word";

const processTag = (tagArray: string[]): RelevantPersonArray => {
  const tagMapping: { [key: string]: RelevantPersonArray[number] } = {
    '우왁굳': 'woowakgood',
    '아이네': 'ine',
    '징버거': 'jingburger',
    '릴파': 'lilpa',
    '주르르': 'jururu',
    '고세구': 'gosegu',
    '비챤': 'viichan',
  };

  // 태그 배열을 매핑된 값으로 변환
  return tagArray
    .map(item => tagMapping[item])  // 매핑된 값을 가져옴
    .filter((item): item is RelevantPersonArray[number] => item !== undefined); // undefined 필터링
};

const processWordData = (word_: Word_) => {
  return {
    relevantPersonArray: word_.meta?.tag ? processTag(word_.meta.tag) : [],
    word: word_.id || word_._id || "", // 비어있지 않은 첫 번째 값을 반환
    description: word_.mean || "", // 비어있지 않으면 그대로 반환
    urls: word_.meta?.url || [], // 비어있지 않으면 그대로 반환
    tagArray: word_.meta?.tag || [] // 비어있지 않으면 그대로 반환
  } as WordProps; // 강제 타입 캐스팅
};

const processWordsData = (words_: Words_) => {
  return words_.map(processWordData); // map을 사용하여 각 단어를 변환
};

export {
  processWordsData,
  processWordData
};
