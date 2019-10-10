import React from 'react';
import styled from 'styled-components';

const title = 'choose desired currencies';

const Wrapper = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.p`
  color: white;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
`;

const ConversionCurrency = () => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default ConversionCurrency;
