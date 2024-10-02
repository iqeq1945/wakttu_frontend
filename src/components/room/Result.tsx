import {
  CModal,
  Container,
  CResult,
  Item,
  ResultTitle,
} from '@/styles/room/Result';

const Result = () => {
  return (
    <Container>
      <CModal>
        <ResultTitle>결 과</ResultTitle>
        <CResult>
          <Item></Item>
        </CResult>
      </CModal>
    </Container>
  );
};

export default Result;
