import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const EmptyItems = ({ text, link, btnText }) => {
  const navigate = useNavigate();
  const goToProduct = () => {
    navigate(link);
  };

  return (
    <NoFavouriteContainer>
      <EmptyContainer>
        <h4>{text}</h4>
        <button onClick={() => goToProduct()}>{btnText}</button>
      </EmptyContainer>
    </NoFavouriteContainer>
  );
};

export default EmptyItems;

const NoFavouriteContainer = styled.div`
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
  }
  button {
    margin-top: 1rem;
    border: none;
    background-color: tomato;
    padding: 1rem 2rem;
    font-size: 1.3rem;
    border-radius: 0.5rem;
  }
`;
