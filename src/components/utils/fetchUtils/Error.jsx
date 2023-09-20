import React from "react";
import styled from "styled-components";

const Error = ({ text = "There was an error!", style }) => {
  return <Container style={{ color: "red", ...style }}>{text}</Container>;
};

export default Error;

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
`;
