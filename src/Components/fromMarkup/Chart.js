import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const enter = {
  CUC_IMP: 0.818142,
  CUC_EUR: 0.908985,
  CUC_USD: 1,
  CUC_IMT: 0.818142,
  CUC_EUT: 0.908985,
  CUC_UST: 1,
  CUC_IMQ: 0.818142,
  CUC_EUQ: 0.908985,
  CUC_USQ: 1,
  CUC_IMW: 0.818142,
  CUC_EUW: 0.908985,
  CUC_USW: 1,
  CUC_IMY: 0.818142,
  CUC_EUY: 0.908985,
  CUC_USY: 1,
  CUC_IMU: 0.818142,
  CUC_EUU: 0.908985,
  CUC_USU: 1,
  CUC_IMI: 0.818142,
  CUC_EUI: 0.908985,
  CUC_USI: 1,
  CUC_IMO: 0.818142,
  CUC_EUO: 0.908985,
  CUC_USO: 1,
  CUC_IMB: 0.818142,
  CUC_EUB: 0.908985,
  CUC_USB: 1,
  CUC_IMN: 0.818142,
  CUC_EUN: 0.908985,
  CUC_USN: 1,
  CUC_IMA: 0.818142,
  CUC_EUA: 0.908985,
  CUC_USA: 1,
  CUC_IMS: 0.818142,
  CUC_EUS: 0.908985,
  CUC_USS: 1,
  CUC_IMF: 0.818142,
  CUC_EUF: 0.908985,
  CUC_USF: 1,
  CUC_IMG: 0.818142,
  CUC_EUG: 0.908985,
  CUC_USG: 1,
  CUC_IMJ: 0.818142,
  CUC_EUJ: 0.908985,
  CUC_USJ: 1,
};
const test = Object.entries(enter);

const Wrapper = styled.div`
  width: 60%;
  height: auto;
  margin: 0 auto;
  margin-top: 1em;
  margin-bottom: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  border-radius: 1em;
  box-shadow: 0px 6px 5px -2px rgba(219, 222, 221, 0.54);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  font-family: 'Lato', sans-serif;
`;

const Chart = () => {
  console.log(test);
  return (
    <Wrapper>
      {test.map(arr => (
        <Item key={arr[0]} arr={arr} />
      ))}
    </Wrapper>
  );
};

export default Chart;
