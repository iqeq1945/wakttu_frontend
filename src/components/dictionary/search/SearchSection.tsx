import { Container } from '@/components/dictionary/Container';
import { Word, WordProps, Words_ } from '@/components/dictionary/Word';
import SearchBar from '@/components/dictionary/SearchBar';
import { ListWrapper } from '@/styles/dictionary/Word';
import { useRouter } from 'next/router';
import { processWordsData } from '@/utils/processWordData';
import { client } from '@/services/api';
import { useEffect, useState } from 'react';

const SearchSection = () => {
  const router = useRouter();
  const { keyword } = router.query;
  const [words, setWords] = useState<WordProps[]>([]);
  const [loading, setLoading] = useState(true);

  // 타입 가드를 사용하여 inputValue 초기값 설정
  const [inputValue, setInputValue] = useState<string>(
    Array.isArray(keyword) ? keyword[0] : keyword || ''
  );

  useEffect(() => {
    const getWords = async (keyword: any) => {
      setLoading(true);
      try {
        const words_: Words_ = await client
          .get(`/dictionary/search?keyword=${keyword}&take=4&skip=0`)
          .then((res) => res.data);
        const words: WordProps[] = processWordsData(words_);
        setWords(words);
      } catch {
        const words_: Words_ = [
          {
            id: '라니',
            type: 'VIICHAN',
            mean: '비챤님의 개인팬덤 이름',
            meta: {
              tag: ['비챤'],
              url: ['https://youtu.be/dWrwEUqHJXU?si=DrHwYEC5wlMDzVj8'],
              bgm: 'v-21',
            },
            hit: 0,
            wakta: true,
          },
          {
            id: '라니까',
            type: '어미「어미」「부사」「어미」「어미」「어미」「어미」',
            mean: '((‘이다’, ‘아니다’의 어간이나 어미 ‘-으시-’, ‘-더-’, ‘-으리-’ 뒤에 붙어))해라할 자리나 혼잣말에 쓰여, 앞서 말한 내용을 다시 확인하여 말할 때에 쓰이는 종결 어미.((받침 없는 동사 어간, ‘ㄹ’ 받침인 동사 어간 또는 어미 ‘-으시-’ 뒤에 붙어))해라할 자리에 쓰여, 가볍게 꾸짖으면서 거듭 명령하는 뜻을 나타내는 종결 어미.((받침 없는 동사 어간, ‘ㄹ’ 받침인 동사 어간 또는 어미 ‘-으시-’ 뒤에 붙어))‘-라고 하니까’가 줄어든 말.((‘이다’, ‘아니다’의 어간이나 어미 ‘-으시-’, ‘-더-’, ‘-으리-’ 뒤에 붙어))‘-라고 하니까’가 줄어든 말.‘그러니까’의 방언(황해).((‘있다’, ‘없다’, ‘계시다’의 어간이나 동사 어간 뒤에 붙어))(예스러운 표현으로) ‘-노라니’를 강조하여 이르는 말.‘-노라니까’의 북한어.해할 자리나 혼잣말에 쓰여, 이미 굳어진 평판을 다시 확인하여 말할 때 쓰이는 종결 어미. 화자가 어떤 일을 보거나 들으면서 그 일이 원인이 되어 마땅히 어떠어떠한 결과가 따르리라고 예측했는데, 그 예측대로 되었음을 나타낸다. 그 예측은 말로 표현되지는 않는다.‘-더라고 하니까’가 줄어든 말.((‘ㄹ’을 제외한 받침 있는 동사 어간 뒤에 붙어))해라할 자리에 쓰여, 가볍게 꾸짖으면서 거듭 명령하는 뜻을 나타내는 종결 어미.((‘ㄹ’을 제외한 받침 있는 동사 어간 뒤에 붙어))‘-으라고 하니까’가 줄어든 말.',
            meta: null,
            hit: 0,
            wakta: false,
          },
          {
            id: '라니냐',
            type: '명사',
            mean: '적도 부근의 동부 태평양에서, 해면의 수온이 비정상적으로 낮아지는 현상. 적도 부근의 편동풍이 강해져 온난한 수역이 서쪽으로 이동하면서 심해의 찬물이 상승하여 일어난다. 이 현상은 지구의 기온을 하강시킬 수 있다.',
            meta: null,
            hit: 0,
            wakta: false,
          },
          {
            id: '라니바보아니다',
            type: 'VIICHAN',
            mean: '라니들이 본인들은 바보가 아니라고 할때 하는말 ',
            meta: {
              tag: ['비챤'],
              url: null,
              bgm: 'v-7',
            },
            hit: 0,
            wakta: true,
          },
        ];

        const words = processWordsData(words_);
        setWords(words);
      } finally {
        setLoading(false);
      }
    };

    getWords(keyword);
    setInputValue(Array.isArray(keyword) ? keyword[0] : keyword || '');
  }, [keyword]);

  if (loading) {
    return (
      <Container>
        <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
        <p>Loading...</p>
      </Container>
    );
  }

  return (
    <Container>
      <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
      <ListWrapper>
        {words.map((wordProps, index) => (
          <Word key={index} {...wordProps} />
        ))}
      </ListWrapper>
    </Container>
  );
};

export default SearchSection;
