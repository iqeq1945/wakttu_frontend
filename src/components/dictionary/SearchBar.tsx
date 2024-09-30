import { Input, SearchButton, SearchIcon, Wrapper } from "@/styles/dictionary/SearchBar";
import { useRouter } from "next/router";
import { useState } from "react";

const SearchBar = ({ value }: { value?: string }) => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState<string>(value ? value : "");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleClick = () => {
    router.push("/dictionary/search"); 
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleClick(); 
    }
  }

  return (
    <Wrapper>
      <Input onChange={handleInputChange} onKeyDown={handleKeyDown} value={inputValue} />
      <SearchButton onClick={handleClick}>
        <SearchIcon src="/assets/game/search.svg"></SearchIcon>
      </SearchButton>
    </Wrapper>
  );
};

export default SearchBar;
