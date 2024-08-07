
import { Container, ContainerContent, LeftWrapper, RightWrapper } from "@/styles/mypage/MypageForm";
import CollectionDetail from "./CollectionDetail";

const Mypage = () => {
  return (
    <Container>
      <ContainerContent>
        <CollectionDetail />
        <RightWrapper>?</RightWrapper>
      </ContainerContent>
    </Container>
  );
};
export default Mypage;