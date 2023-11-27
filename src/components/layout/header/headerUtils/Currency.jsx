import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addCurrency } from "../../../../redux/user/userSlice";
import { currencyConstants } from "../../../utils/constants/currencyConstants";

const Currency = () => {
  const dispatch = useDispatch();

  // Currency Handler
  const handleCurrency = (e) => {
    dispatch(addCurrency(e.target.value));
  };

  return (
    <CurrencyContainer>
      <select onChange={handleCurrency}>
        {currencyConstants.map((currency) => (
          <option key={currency.name} value={currency.name}>
            {currency.name}
          </option>
        ))}
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
