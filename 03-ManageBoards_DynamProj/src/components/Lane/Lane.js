import React from 'react';
import styled from 'styled-components';

const LaneWrapper = styled.div`
  list-style: none;
  text-align: left;
  padding: 0;
  box-shadow: 0px 0px 5px 1px #0000005e;
  background: lightGray;
  border-radius: 10px;
  min-height: 50vh;
  width: 20vw;

  @media (max-width: 768px) {
    margin-bottom: 5%;
  }
`;

const Title = styled.h2`
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid darkGray;
`;

const Lane = ({ title }) => (
  <LaneWrapper>
    <Title>{title}</Title>
  </LaneWrapper>
);

export default Lane;
