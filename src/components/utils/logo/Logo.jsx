import React from "react";
import styled from "styled-components";

const Logo = ({ primaryColor = "#000", secondaryColor = "tomato" }) => {
  return (
    <Container primaryColor={primaryColor} secondaryColor={secondaryColor}>
      <h2>
        DIGI<span>MART</span>
      </h2>
    </Container>
  );
};

export default Logo;

const Container = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  h2 {
    letter-spacing: 0.2rem;
    font-size: 3rem;
    margin: 0;
    font-weight: 600;
    color: ${(props) => props.primaryColor};
    span {
      color: ${(props) => props.secondaryColor};
    }

    @media screen and (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
`;
