import styled from 'styled-components';

import SearchIcon from './icons/SearchIcon';

const SearchBar = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 270px;
  height: 34px;
  border-style: none;
  border-radius: 17px 0 0 17px;
  outline: none;
  padding: 0 8px 0 15px;
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
`;

const searchBar = () => {
  return (
    <SearchBar>
      <SearchInput type='text' placeholder='Search...' />
      <SearchIcon width='18px' height='18px' fill='#121212' />
    </SearchBar>
  );
};

export default searchBar;
