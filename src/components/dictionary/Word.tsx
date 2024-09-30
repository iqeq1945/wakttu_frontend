import { matchENtoKR } from "@/utils/matchENtoKR";
import { Description, LinkButton, LinkIcon, RelevantBdage, RelevantText, RelevantWrapper, TagContent, TagWrapper, Title, TopLeftWrapper, TopWrapper, Wrapper } from "@/styles/dictionary/Word";

type RelevantPerson = "woowakgood" | "ine" | "jingburger" | "lilpa" | "jururu" | "gosegu" | "viichan";
type RelevantPersonArray = RelevantPerson[];

type WordProps = {
  relevantPersonArray: RelevantPersonArray;
  tagArray: string[];
  word: string;
  description: string
}

const Word = ({ relevantPersonArray, tagArray, word, description }: WordProps) => {
  return (
    <Wrapper>
      <TopWrapper>
        <TopLeftWrapper>
          <Title>{word}</Title>
          <RelevantWrapper>
            {relevantPersonArray.map((relevantPerson, index) => {
              return (
                <RelevantBdage key={index} $RelevantPerson={relevantPerson}>
                  <RelevantText>{matchENtoKR(relevantPerson)}</RelevantText>
                </RelevantBdage>
              )
            })}
          </RelevantWrapper>
        </TopLeftWrapper>

        <LinkButton>
          <LinkIcon src="/assets/game/link.svg" />
        </LinkButton>
      </TopWrapper>

      <Description>{description}</Description>

      <TagWrapper>
        {tagArray.map((tag: string, index) => {
          return <TagContent key={index}>{`#${tag}`}</TagContent>
        })}
      </TagWrapper>
    </Wrapper>
  );
};

export {
  type RelevantPerson,
  type RelevantPersonArray,
  type WordProps,
  Word
};
