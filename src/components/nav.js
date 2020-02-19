import React from 'react';
import styled from 'styled-components';

import MainLogo from './icons/mainLogo';

const Nav = styled.nav`
  background-color: #000;
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const nav = () => {
  return (
    <Nav>
      <a href='#home'>
        <MainLogo fill='#fff' width='150px' />
      </a>
    </Nav>
  );
};

export default nav;
