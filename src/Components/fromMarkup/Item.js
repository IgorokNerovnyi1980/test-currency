import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 26%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;
  transition: 0.4s;
  :hover {
    transform: scale(1.05);
    transition: 0.4s;
    background-color: #414347;
  }
`;
const Name = styled.p`
  width: 15%;
  text-align: center;
  color: rgb(139, 230, 103);
`;
const Equal = styled.p`
  width: 10%;
  text-align: center;
  color: rgb(230, 230, 76);
`;
const Value = styled(Name)`
  width: 50%;
  color: rgb(243, 242, 242);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SmollName = styled(Name)`
  margin-top: 0.2rem;
  padding-left: 0.2em;
  font-size: 0.8rem;
  color: rgb(230, 230, 76);
`;
const Like = styled.button`
  width: 25%;
  height: 100%;
  style: none;
  background: none;
  border: none;
  color: #525457;
  :active {
    color: rgb(211, 207, 207);
  }
`;

const Item = ({ arr }) => (
  <Wrapper>
    <Name>{arr[0].slice(-3)}</Name>
    <Equal>=</Equal>
    <Value>
      {arr[1]}
      <SmollName>{arr[0].slice(0, 3)}</SmollName>
    </Value>
    <Like value={arr}>priority</Like>
  </Wrapper>
);

export default Item;
