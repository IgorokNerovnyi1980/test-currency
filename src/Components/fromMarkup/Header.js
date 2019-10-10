import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  color: white;
  font-size: 2rem;
  font-weight: 600;
`;
const title = 'Current course to ';

const Header = ({ currencyName = 'USD' }) => (
  <Wrapper>
    <Title>{`${title}${currencyName}`}</Title>
  </Wrapper>
);

export default Header;
