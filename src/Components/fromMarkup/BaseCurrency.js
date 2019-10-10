import React from 'react';
import styled from 'styled-components';

const currentyName = ['USD', 'EUR', 'UAN'];

const Select = styled.select`
  width: 15%;
  color: rgb(243, 242, 242);
  border-bottom: 0.1em solid white;
  background: none;
  style: none;
`;

const BaseCurrency = () => (
  <Select>
    {currentyName.map(item => (
      <option>{item}</option>
    ))}
  </Select>
);

export default BaseCurrency;
