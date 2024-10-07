import { RelevantPerson } from "@/components/dictionary/Word";

export const matchENtoKR = (relevantPerson: RelevantPerson) => {
  const koreanNames = {
    "woowakgood": "우왁굳",
    "ine": "아이네",
    "jingburger": "징버거",
    "lilpa": "릴파",
    "jururu": "주르르",
    "gosegu": "고세구",
    "viichan": "비챤"
  };
  return koreanNames[relevantPerson];
}
