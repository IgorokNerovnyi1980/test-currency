import React from 'react';
import styled from 'styled-components';
import Header from '../fromMarkup/Header';
import Filter from '../fromMarkup/Filter';

const Wrapper = styled.header`
  width: 100%;
  height: 100vh;
`;

const PageMain = () => (
  <Wrapper>
    <Header />
    <Filter />
  </Wrapper>
);

export default PageMain;
