import { Input, SearchButton, SearchIcon, Wrapper } from "@/styles/dictionary/SearchBar";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface SearchBarProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>; // 상태 업데이트 함수 타입
}

const SearchBar: React.FC<SearchBarProps> = ({ inputValue, setInputValue }) => {
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleClick = () => {
    router.push(`/dictionary/search?keyword=${inputValue}`); 
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
