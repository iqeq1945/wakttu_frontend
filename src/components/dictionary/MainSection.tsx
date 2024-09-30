import Logo from "@/components/common/Logo";
import { Container } from "@/components/dictionary/Container";
import SearchBar from "@/components/dictionary/SearchBar";

const MainSection = () => {
  return (
    <Container type="top">
      <Logo size="lg" type="logotype" />
      <SearchBar />
    </Container>
  );
};

export default MainSection;
