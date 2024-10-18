import { Container } from '@/components/dictionary/Container';
import { Word, WordProps } from '@/components/dictionary/Word';

const WordSection: React.FC<WordProps> = (props) => {
  return (
    <Container type='bottom'>
      <Container type='content'>
        <h3>오늘의 단어</h3>
        <Word {...props} />
      </Container>
    </Container>
  );
};

export default WordSection;
