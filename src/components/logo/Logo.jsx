import React from "react";
import styled from "styled-components";

const Logo = ({ variant }) => {
  return (
    <Container variant={variant}>
      <h2>
        DIGI<span>MART</span>
      </h2>
    </Container>
  );
};

export default Logo;

const Container = styled.div`
  h2 {
    letter-spacing: 0.2rem;
    font-size: 3rem;
    margin: 0;
    font-weight: 600;
    color: ${(props) => (props.variant === "dark" ? `#fff` : `#000`)};
    span {
      color: tomato;
    }

    @media screen and (max-width: 768px) {
      font-size: 2.5rem;
      color: ${(props) => (props.variant === "dark" ? `#fff` : `#000`)};
      span {
        color: ${(props) => (props.variant === "dark" ? `tomato` : `#fff`)};
      }
    }
  }
`;
