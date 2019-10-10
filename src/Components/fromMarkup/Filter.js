import React from 'react';
import styled from 'styled-components';
import BaseCurrency from './BaseCurrency';
import DateNow from './DateNow';

const Wrapper = styled.header`
  width: 60%;
  height: 20vh;
  margin: 0 auto;
  border-bottom: 0.1em solid white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Filter = () => (
  <Wrapper>
    <BaseCurrency />
    <DateNow />
  </Wrapper>
);

export default Filter;
