import React from "react";
import styled from "styled-components";

const Title = ({ variant = "h1", text, style }) => {
  return (
    <Container style={style}>
      {variant === ("h1" || "H1") && <h1>{text}</h1>}
      {variant === ("h2" || "H2") && <h2>{text}</h2>}
      {variant === ("h3" || "H3") && <h3>{text}</h3>}
      {variant === ("h4" || "H4") && <h4>{text}</h4>}
    </Container>
  );
};

export default Title;

const Container = styled.div`
  width: 100%;
  color: var(--text-primary);

  h1 {
    font-size: 2.4rem;
    font-weight: 500;
  }

  h2 {
    font-size: 2rem;
    font-weight: 500;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 500;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: 500;
  }
`;
