import Header from '@/containers/common/Header';
import MainSection from '@/components/dictionary/MainSection';
import WordSection from '@/components/dictionary/WordSection';
import { Word_, WordProps } from '@/components/dictionary/Word';
import { Container } from '@/components/dictionary/Container';
import { client } from '@/services/api';
import { processWordData } from '@/utils/processWordData';
import axios from 'axios';

interface ApiResponse<T> {
  data: T;
}

interface DictionaryProps {
  todayWord: WordProps;
}

const Dictionary: React.FC<DictionaryProps> = ({ todayWord }) => {
  return (
    <Container>
      <Header />
      <MainSection />
      <WordSection {...todayWord} />
    </Container>
  );
};

export async function getStaticProps() {
  try {
    const todayWord_: ApiResponse<Word_> = await client.get(
      `/dictionary/today`
    );
    const todayWord = processWordData(todayWord_.data);
    return {
      props: {
        todayWord,
      },
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const todayWord_: ApiResponse<Word_> = {
        data: {
          _id: '왁비에스기상캐스터',
          type: 'GOSEGU',
          mean: '고니티에서 진행한 기상캐스터 컨셉의 일기예보 콘텐츠',
          meta: {
            tag: ['고세구', '콘텐츠'],
            url: ['https://youtu.be/Vjtu4OoA5NM?si=pDyyPHiUIeZKigXK'],
            bgm: 'g-1',
          },
          hit: 0,
          wakta: true,
        },
      };
      const todayWord = processWordData(todayWord_.data);
      return {
        props: {
          todayWord,
        },
      };
    }
  }
}

export default Dictionary;
