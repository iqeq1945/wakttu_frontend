
import { Container, ContainerContent, LeftWrapper, RightWrapper } from "@/styles/mypage/MypageForm";
import CosmeticInfo from "./CosmeticInfo";
import CosmeticList from "./CosmeticList";

const Mypage = () => {
  return (
    <Container>
      <ContainerContent>
        <CosmeticInfo />
        <CosmeticList />
      </ContainerContent>
    </Container>
  );
};
export default Mypage;