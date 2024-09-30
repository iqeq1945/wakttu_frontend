// Search.tsx
import Header from "@/containers/common/Header";
import { WordProps } from "@/components/dictionary/Word";
import { Container } from "@/components/dictionary/Container";
import SearchSection from "@/components/dictionary/search/SearchSection";

const Search = () => {
  const words: WordProps[] = [
    {
      relevantPersonArray: ["woowakgood"],
      tagArray: ["아이네", "어록"],
      word: "이세계",
      description:
        "현재의 우리 차원이 아닌 또 다른 세계를 통틀어 일컫는 말",
    },
    {
      relevantPersonArray: ["woowakgood"],
      tagArray: ["아이네", "어록"],
      word: "이세계",
      description:
        "현재의 우리 차원이 아닌 또 다른 세계를 통틀어 일컫는 말",
    },
    {
      relevantPersonArray: ["ine", "jingburger", "lilpa", "jururu", "gosegu", "viichan"],
      tagArray: ["아이네", "징버거", "주르르", "릴파", "고세구", "비챤"],
      word: "이세계아이돌",
      description:
        "현재의 우리 차원이 아닌 또 다른 세계를 통틀어 일컫는 말",
    },
    {
      relevantPersonArray: ["ine", "jingburger", "lilpa", "jururu", "gosegu", "viichan"],
      tagArray: ["아이네", "어록"],
      word: "이세계",
      description:
        "현재의 우리 차원이 아닌 또 다른 세계를 통틀어 일컫는 말 현재의 우리 차원이 아닌 또 다른 세계를 통틀어 일컫는 말 현재의 우리 차원이 아닌 또 다른 세계를 통틀어 일컫는 말 현재의 우리 차원이 아닌 또 다른 세계를 통틀어 일컫는 말",
    },
  ];

  return (
    <Container >
      <Header />
      <SearchSection words={words} />
    </Container>
  );
};

export default Search;
