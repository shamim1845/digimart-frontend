import React from "react";
import styled from "styled-components";

const NotFound = ({ style, text }) => {
  return (
    <Container style={style}>
      <h3>Oops!</h3>
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

  h3 {
    font-size: 2rem;
  }
`;
