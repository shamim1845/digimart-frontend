import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addCurrency } from "../../../../features/user/userSlice";

const Currency = () => {
  const dispatch = useDispatch();
  // Currency Handler
  const handleCurrency = (e) => {
    dispatch(addCurrency(e.target.value));
  };

  return (
    <CurrencyContainer>
      <div className="currency">
        <select onChange={handleCurrency}>
          <option value="usd">USD</option>
          <option value="bdt">BDT</option>
        </select>
      </div>
    </CurrencyContainer>
  );
};

export default Currency;

const CurrencyContainer = styled.div``;
