// Search.tsx
import Header from "@/containers/common/Header";
import { WordProps, Words_ } from "@/components/dictionary/Word";
import { Container } from "@/components/dictionary/Container";
import SearchSection from "@/components/dictionary/search/SearchSection";

interface SearchProps {
  words: WordProps[];
}

const Search: React.FC<SearchProps> = () => {
  return (
    <Container >
      <Header />
      <SearchSection />
    </Container>
  );
};

export default Search;
