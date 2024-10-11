import { matchENtoKR } from '@/utils/matchENtoKR';
import {
  Description,
  LinkButton,
  LinkIcon,
  RelevantBdage,
  RelevantText,
  RelevantWrapper,
  TagContent,
  TagWrapper,
  Title,
  TopLeftWrapper,
  TopWrapper,
  Wrapper,
} from '@/styles/dictionary/Word';
import { getR2URL } from '@/services/api';

type RelevantPerson =
  | 'woowakgood'
  | 'ine'
  | 'jingburger'
  | 'lilpa'
  | 'jururu'
  | 'gosegu'
  | 'viichan';
type RelevantPersonArray = RelevantPerson[];

type WordProps = {
  relevantPersonArray: RelevantPersonArray;
  tagArray: string[];
  word: string;
  description: string;
  urls: string[];
};

type Word_ = {
  _id?: string;
  type: string;
  meta: {
    tag: string[];
    url: string[] | null;
    bgm: string;
  } | null;
  id?: string;
  mean: string;
  hit: number;
  wakta: boolean;
};
type Words_ = Word_[];

const Word = ({
  relevantPersonArray,
  tagArray,
  word,
  description,
  urls,
}: WordProps) => {
  const handleButtonClick = () => {
    window.open(urls[0], '_blank');
  };

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
              );
            })}
          </RelevantWrapper>
        </TopLeftWrapper>

        {urls.map(
          (url, index) =>
            url && (
              <LinkButton key={index} onClick={() => handleButtonClick()}>
                <LinkIcon src={getR2URL('/assets/icons/link.svg')} />
              </LinkButton>
            )
        )}
      </TopWrapper>

      <Description>{description}</Description>

      {tagArray && tagArray.length > 0 && (
        <TagWrapper>
          {tagArray.map((tag: string, index) => {
            return <TagContent key={index}>{`#${tag}`}</TagContent>;
          })}
        </TagWrapper>
      )}
    </Wrapper>
  );
};

export {
  type RelevantPerson,
  type RelevantPersonArray,
  type WordProps,
  type Word_,
  type Words_,
  Word,
};
