import React from 'react';
import styled from 'styled-components';

import MainLogo from './icons/MainLogo';
import SearchBar from './SearchBar';

const Nav = styled.nav`
  background-color: #121212;
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const nav = () => {
  return (
    <Nav>
      <a href='#home'>
        <MainLogo fill='#fff' width='150px' />
      </a>
      <SearchBar />
    </Nav>
  );
};

export default nav;
