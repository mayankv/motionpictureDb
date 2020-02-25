import React from 'react';
import Link from 'next/link';
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

const A = styled.a`
  display: flex;
`;

const nav = () => {
  return (
    <Nav>
      <Link href='/' passHref>
        <A>
          <MainLogo fill='#fff' width='150px' />
        </A>
      </Link>
      <SearchBar />
    </Nav>
  );
};

export default nav;
