import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const title = 'Current course to ';

const Wrapper = styled.header`
  position: relative;
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
const Menu = styled.nav`
  position: absolute;
  top: 4vh;
  right: 5%;
  width: 10%;
  height: 2vh;
`;
const List = styled.div`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 1rem;
  font-weight: 600;
`;
const linkStyles = {
  textDecoration: 'none',
  color: 'white',
};

const Header = ({ currencyName = 'USD' }) => (
  <Wrapper>
    <Title>{`${title}${currencyName}`}</Title>
    <Menu>
      <List>
        <li>
          <Link to={'/home'} style={linkStyles}>
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to={'/convertor'} style={linkStyles}>
            <p>Convertor</p>
          </Link>
        </li>
      </List>
    </Menu>
  </Wrapper>
);

export default Header;
