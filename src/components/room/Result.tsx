import {
  CModal,
  Confirm,
  Container,
  CResult,
  Item,
  ResultTitle,
} from '@/styles/room/Result';

interface Props {
  list: Result[];
  offModal: () => void;
}

interface Result {
  rank: number;
  name: string;
  userId: string;
  score: number;
  team?: string;
}

const Result = ({ list, offModal }: Props) => {
  return (
    <Container>
      <CModal>
        <ResultTitle>결 과</ResultTitle>
        <CResult>
          {list.map((item, idx) => {
            return (
              <Item key={item.userId}>
                <span>{idx + 1}</span> <span>{item.name}</span>
                <span>{item.score}</span>
              </Item>
            );
          })}
        </CResult>
        <Confirm onClick={offModal}>확인 끝!</Confirm>
      </CModal>
    </Container>
  );
};

export default Result;
