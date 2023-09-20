import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addCurrency } from "../../../../redux/user/userSlice";

const Currency = () => {
  const dispatch = useDispatch();

  // Currency Handler
  const handleCurrency = (e) => {
    dispatch(addCurrency(e.target.value));
  };

  return (
    <CurrencyContainer>
      <select onChange={handleCurrency}>
        <option value="usd">USD</option>
        <option value="bdt">BDT</option>
      </select>
    </CurrencyContainer>
  );
};

export default Currency;

const CurrencyContainer = styled.div`
  select {
    cursor: pointer;
    font-size: 1.3rem;
    &:focus {
      outline: none;
    }
  }
`;
