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

const relevantInfo = {
  woowakgood: {
    koreanName: '우왁굳',
    backgroundColor: '#164532',
    color: '#FFFFFF',
  },
  ine: {
    koreanName: '아이네',
    backgroundColor: '#8A2BE2',
    color: '#FFFFFF',
  },
  jingburger: {
    koreanName: '징버거',
    backgroundColor: '#F0A957',
    color: '#FFFFFF',
  },
  lilpa: {
    koreanName: '릴파',
    backgroundColor: '#2A265A',
    color: '#FFFFFF',
  },
  jururu: {
    koreanName: '주르르',
    backgroundColor: '#FF008C',
    color: '#FFFFFF',
  },
  gosegu: {
    koreanName: '고세구',
    backgroundColor: '#00A6FF',
    color: '#FFFFFF',
  },
  viichan: {
    koreanName: '비챤',
    backgroundColor: '#95C100',
    color: '#FFFFFF',
  },
  gomem: {
    koreanName: '클래식',
    backgroundColor: '#C75D00',
    color: '#FFFFFF',
  },
  classic: {
    koreanName: '클래식',
    backgroundColor: '#C75D00',
    color: '#FFFFFF',
  },
  academy: {
    koreanName: '아카데미',
    backgroundColor: '#FF2323',
    color: '#FFFFFF',
  },
};
type RelevantPerson = keyof typeof relevantInfo;
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
            {relevantPersonArray.map((relevantPerson, index) => (
              <RelevantBdage key={index} $RelevantPerson={relevantPerson}>
                <RelevantText>{matchENtoKR(relevantPerson)}</RelevantText>
              </RelevantBdage>
            ))}
          </RelevantWrapper>
        </TopLeftWrapper>

        {urls.map(
          (url, index) =>
            url && (
              <LinkButton key={index} onClick={() => handleButtonClick()}>
                <LinkIcon
                  src={getR2URL('/assets/icons/link.svg')}
                  alt="링크 아이콘"
                />
              </LinkButton>
            )
        )}
      </TopWrapper>

      <Description>{description}</Description>

      {tagArray && tagArray.length > 0 && (
        <TagWrapper>
          {tagArray.map((tag, index) => (
            <TagContent key={index}>{`#${tag}`}</TagContent>
          ))}
        </TagWrapper>
      )}
    </Wrapper>
  );
};

export {
  relevantInfo,
  type RelevantPerson,
  type RelevantPersonArray,
  type WordProps,
  type Word_,
  type Words_,
  Word,
};
