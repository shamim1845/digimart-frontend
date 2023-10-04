import React from "react";
import styled from "styled-components";

const PageContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PageContainer;

const Container = styled.div`
  width: 100%;
  padding: 0 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }
  @media screen and (max-width: 576px) {
    padding: 0 1rem;
  }
`;
