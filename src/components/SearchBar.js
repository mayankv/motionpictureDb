import React from 'react';
import styled from 'styled-components';

import SearchIcon from './icons/SearchIcon';

const SearchBar = styled.div`
  display: flex;
  align-items: center;
`;

const Search = styled.input`
  width: 270px;
  height: 34px;
  border-style: none;
  border-radius: 17px 0 0 17px;
  outline: none;
  padding: 0 8px 0 15px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
`;

const searchBar = () => {
  return (
    <SearchBar>
      <Search type='text' placeholder='Search...' />
      <SearchIcon width='18px' height='18px' fill='#121212' />
    </SearchBar>
  );
};

export default searchBar;
