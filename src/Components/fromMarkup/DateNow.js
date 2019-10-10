import React from 'react';
import styled from 'styled-components';
import * as moment from 'moment';

const title = 'Date Now';
const date = moment().format('MMM Do YY');

const Wrapper = styled.div`
  width: 15%;
  height: 6vh;
  color: rgb(243, 242, 242);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h6`
  font-size: 1.1rem;
  font-weight: 600;
`;
const Date = styled.p`
  font-size: 0.8rem;
`;

const DateNow = () => (
  <Wrapper>
    <Title>{title}</Title>
    <Date>{date}</Date>
  </Wrapper>
);

export default DateNow;
