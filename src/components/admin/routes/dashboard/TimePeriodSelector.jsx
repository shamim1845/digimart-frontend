import React, { useEffect } from "react";
import styled from "styled-components";

const periodConstant = [
  { id: 1, title: "15 Days", period: 15 },
  { id: 2, title: "30 Days", period: 30 },
  { id: 3, title: "60 Days", period: 60 },
  { id: 4, title: "90 Days", period: 90 },
  { id: 5, title: "180 Days", period: 180 },
  { id: 6, title: "365 Days", period: 365 },
  { id: 7, title: "730 Days", period: 730 },
];

const TimePeriodSelector = ({ period, setPeriod }) => {
  const periodHandler = (e) => {
    setPeriod(e.target.value);
  };

  //   Set default value
  useEffect(() => {
    setPeriod(periodConstant[0].period);
  }, [setPeriod]);

  return (
    <CurrencyContainer>
      <select onChange={periodHandler} value={period}>
        {periodConstant.map((period) => (
          <option key={period.id} value={period.period}>
            {period.title}
          </option>
        ))}
      </select>
    </CurrencyContainer>
  );
};

export default TimePeriodSelector;

const CurrencyContainer = styled.div`
  select {
    cursor: pointer;
    font-size: 1.3rem;
    &:focus {
      outline: none;
    }
  }
`;
