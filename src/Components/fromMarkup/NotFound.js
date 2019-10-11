import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  font-weight: 600;
`;

const PageNotFound = () => (
  <Wrapper>
    <h6>Page Not Found</h6>
  </Wrapper>
);

export default PageNotFound;
