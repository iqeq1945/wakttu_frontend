import { relevantInfo, RelevantPerson } from "@/components/dictionary/Word";

export const matchENtoKR = (relevantPerson: RelevantPerson) => {
  return relevantInfo[relevantPerson].koreanName;
};