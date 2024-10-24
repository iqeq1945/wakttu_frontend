import { relevantInfo, RelevantPerson, RelevantPersonArray, Word_, WordProps, Words_ } from "@/components/dictionary/Word";

const processTag = (tagArray: string[]): RelevantPersonArray => {
  const tagMapping = Object.fromEntries(
    Object.entries(relevantInfo).map(([key, value]) => [value.koreanName, key])
  );

  return tagArray
    .map(item => tagMapping[item])
    .filter((item): item is RelevantPerson => item !== undefined); 
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
