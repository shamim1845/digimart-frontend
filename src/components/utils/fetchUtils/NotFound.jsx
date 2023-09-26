import React from "react";
import styled from "styled-components";
import Title from "../reUseableComponents/Title";

const NotFound = ({ style, text }) => {
  return (
    <Container style={style}>
      <Title variant="h1" text="Oops!" />
      <p>{text}</p>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
