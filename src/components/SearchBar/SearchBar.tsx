import { useState, useRef } from 'react';
import * as S from './style';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  const handleInputChange = (input: string) => {
    setSearchInput(input);
  };

  const handleInputFocus = () => {
    searchRef.current?.focus();
  };

  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <S.Wrapper>
      <div className="search__icon">
        <img src="/icons/search.svg" alt="검색 아이콘" />
      </div>
      <div className="search__area">
        <span>
          <input
            ref={searchRef}
            type="text"
            maxLength={25}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </span>
      </div>
      <div
        className="search__caption"
        onClick={handleInputFocus}
        style={{ display: searchInput !== '' ? 'none' : 'block' }}
      >
        <p>
          "찾으시는 크루"
          <span>가 있나요?</span>
        </p>
      </div>
    </S.Wrapper>
  );
};

export default SearchBar;
