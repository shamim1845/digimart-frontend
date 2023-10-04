import React from "react";
import styled from "styled-components";

const Title = ({ variant = "h1", text, style }) => {
  return (
    <Container>
      {variant === ("h2" || "H2") && <h2 style={style}>{text}</h2>}
      {variant === ("h3" || "H3") && <h3 style={style}>{text}</h3>}
      {variant === ("h1" || "H1") && <h1 style={style}>{text}</h1>}
      {variant === ("h4" || "H4") && <h4 style={style}>{text}</h4>}
    </Container>
  );
};

export default Title;

const Container = styled.div`
  color: var(--text-primary);

  h1 {
    font-size: 2.4rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1.4rem;
  }
`;
