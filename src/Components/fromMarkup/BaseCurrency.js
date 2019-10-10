import React from 'react';
import styled from 'styled-components';

const currentyName = ['USD', 'EUR', 'UAN'];

const Wrapper = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: poiner;
`;

const Select = styled.select`
  padding: 0.5em;
  appearance: none !important;
  background-color: #252729;
  border: none;
  border-bottom: 0.1em solid white;
  color: rgb(243, 242, 242);
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  ::-ms-expand {
    display: none;
  }
`;

const BaseCurrency = () => (
  <Wrapper>
    <Select>
      {currentyName.map(item => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </Select>
  </Wrapper>
);

export default BaseCurrency;
