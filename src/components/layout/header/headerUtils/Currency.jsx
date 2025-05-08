import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addCurrency } from "../../../../redux/user/userSlice";
import { currencyConstants } from "../../../utils/constants/currencyConstants";
import { selectCurrency } from "../../../../redux/user/userSelector";

const Currency = () => {
  const dispatch = useDispatch();
  const currency = useSelector(selectCurrency);

  // Currency Handler
  const handleCurrency = (e) => {
    dispatch(addCurrency(e.target.value));
  };

  return (
    <CurrencyContainer>
      <select onChange={handleCurrency} value={currency}>
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
