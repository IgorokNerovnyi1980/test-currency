import React from 'react';
import styled from 'styled-components';
import Header from '../fromMarkup/Header';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const PageConvertor = () => (
  <Wrapper>
    <Header />
    <h3>Convertor</h3>
  </Wrapper>
);

export default PageConvertor;
