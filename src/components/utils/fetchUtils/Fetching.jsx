import React from "react";
import styled from "styled-components";

const Fetching = ({ text }) => {
  return <Container>{text}</Container>;
};

export default Fetching;

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
