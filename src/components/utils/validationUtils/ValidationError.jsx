import React from "react";
import styled from "styled-components";

const ValidationError = ({ message }) => {
  return (
    <Container className="error">
      <span>i</span> {message}
    </Container>
  );
};

export default ValidationError;

const Container = styled.div`
  font-size: 1.1rem;
  padding: 0.5rem 0;
  span {
    font-style: italic;
    color: tomato;
    margin-right: 0.3rem;
    font-weight: 700;
    font-size: 1.1rem;
  }
`;
