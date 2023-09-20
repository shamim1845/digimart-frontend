import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./reUseableComponents/Buttons";

const EmptyItems = ({ text, link, btnText }) => {
  const navigate = useNavigate();
  const goToProduct = () => {
    navigate(link);
  };

  return (
    <EmptyItemContainer>
      <EmptyContainer>
        <h4>{text}</h4>
        <Button text={btnText} onClick={goToProduct} />
      </EmptyContainer>
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
const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  h4 {
    font-size: 2rem;
  }
`;
