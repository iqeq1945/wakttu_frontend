import { Container } from "@/components/dictionary/Container";
import { Word, WordProps } from "@/components/dictionary/Word";
import SearchBar from "@/components/dictionary/SearchBar";
import { ListWrapper } from "@/styles/dictionary/Word";

const SearchSection: React.FC<{ keyword: string, words: WordProps[] }> = ({ keyword, words }) => {
  return (
    <Container>
      <SearchBar value={keyword} />
      <ListWrapper>
        {words.map((wordProps, index) => (
          <Word key={index} {...wordProps} />
        ))}
      </ListWrapper>
    </Container>
  );
};

export default SearchSection;
