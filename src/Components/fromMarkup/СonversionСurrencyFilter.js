import React from 'react';
import styled from 'styled-components';

const currentyName = [
  'XCD',
  'EUR',
  'BBD',
  'BTN',
  'BND',
  'XAF',
  'CUP',
  'USD',
  'FKP',
  'GIP',
  'HUF',
  'IRR',
  'JMD',
  'AUD',
  'LAK',
  'LYD',
  'MKD',
  'XOF',
  'NZD',
  'OMR',
  'PGK',
  'RWF',
  'WST',
  'RSD',
  'SEK',
  'TZS',
  'AMD',
  'BSD',
  'BAM',
  'CVE',
  'CNY',
  'CRC',
  'CZK',
  'ERN',
  'GEL',
  'HTG',
  'INR',
  'JOD',
  'KRW',
  'LBP',
  'MWK',
  'MRO',
];

const Wrapper = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
const Checkbox = styled.p`
  width: 3em;
  color: white;
  text-align: center;
  font-size: 0.8rem;
  border: 0.1em solid white;
  border-radius: 0.5em;
  padding: 0.2em;
  margin-left: 0.1em;
`;

const ConversionCurrencyFilter = () => {
  return (
    <Wrapper>
      {currentyName.map(item => (
        <Checkbox>{item}</Checkbox>
      ))}
    </Wrapper>
  );
};

export default ConversionCurrencyFilter;
