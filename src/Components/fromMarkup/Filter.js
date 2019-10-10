import React from 'react';
import styled from 'styled-components';
import BaseCurrency from './BaseCurrency';
import ConversionCurrency from './СonversionСurrency';
import DateNow from './DateNow';

const Wrapper = styled.header`
  width: 60%;
  height: 20vh;
  margin: 0 auto;
  border-radius: 1em;
  box-shadow: 0px 6px 5px -2px rgba(219, 222, 221, 0.54);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Filter = () => (
  <Wrapper>
    <BaseCurrency />
    <ConversionCurrency />
    <DateNow />
  </Wrapper>
);

export default Filter;
