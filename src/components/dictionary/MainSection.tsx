import Logo from "@/components/common/Logo";
import { Container } from "@/components/dictionary/Container";
import SearchBar from "@/components/dictionary/SearchBar";
import { useState } from "react";

const MainSection = () => {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <Container type="top">
      <Logo size="lg" type="logotype" />
      <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
    </Container>
  );
};

export default MainSection;
