import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./reUseableComponents/Buttons";
import Title from "./reUseableComponents/Title";

const EmptyItems = ({ text, link, btnText }) => {
  const navigate = useNavigate();
  const goToProduct = () => {
    navigate(link);
  };

  return (
    <EmptyItemContainer>
      <Content>
        <Title variant="h1" text={text} />
        <Button text={btnText} onClick={goToProduct} />
      </Content>
    </EmptyItemContainer>
  );
};

export default EmptyItems;

const EmptyItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100%;

  h4 {
    font-size: 2rem;
  }
`;
