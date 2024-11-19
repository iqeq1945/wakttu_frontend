import { setAchieve } from '@/redux/achieve/achieveSlice';
import { selectUserInfo } from '@/redux/user/userSlice';
import { client, getR2URL } from '@/services/api';
import {
  Input,
  SearchButton,
  SearchIcon,
  Wrapper,
} from '@/styles/dictionary/SearchBar';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface SearchBarProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>; // 상태 업데이트 함수 타입
}

const SearchBar: React.FC<SearchBarProps> = ({ inputValue, setInputValue }) => {
  const router = useRouter();
  const user = useSelector(selectUserInfo);
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleClick = useCallback(async () => {
    router.push(`/dictionary/search?keyword=${inputValue}`);
    if (inputValue === '이세계아이돌') {
      if (user.provider === 'waktaverse.games') {
        const { success } = await client
          .post('/wakta/achieve?id=IPARI')
          .then((response) => response.data)
          .catch(console.error);
        if (success) {
          const { size, achieves } = await client
            .get('/wakta/achieve')
            .then((res) => res.data)
            .catch(console.error);

          const achieve = achieves.filter(
            (item: { id: string; [x: string]: any }) => item.id === 'IPARI'
          );
          dispatch(setAchieve(achieve));
        }
      } else {
        const data = await client
          .post('/stats/achieve', { id: 'IPARI' })
          .then((response) => response.data)
          .catch(console.error);
        dispatch(setAchieve([data]));
      }
    }
  }, [dispatch, inputValue, router, user.provider]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <Wrapper>
      <Input
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        value={inputValue}
      />
      <SearchButton onClick={handleClick}>
        <SearchIcon
          src={getR2URL('/assets/icons/search-green.svg')}
        ></SearchIcon>
      </SearchButton>
    </Wrapper>
  );
};

export default SearchBar;
