import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrency } from "../../../redux/user/userSelector";
import currencyConverter from "../helperFunction/currencyConverter";
import { currencyConstants } from "../constants/currencyConstants";

const Currency = ({ price }) => {
  const [amount, setAmount] = useState(null);

  const currency = useSelector(selectCurrency);

  // convert currency
  useEffect(() => {
    currencyConverter({ amount: price, from: "USD", to: currency }).then(
      (res) => {
        setAmount(res);
      }
    );
  }, [currency, price]);

  // find selected currency
  const selectedCurrency = currencyConstants.find(
    (currCurrency) => currCurrency.name === currency
  );

  return (
    <>
      <span> {selectedCurrency?.icon}</span>
      <span> {amount}</span>
    </>
  );
};

export default Currency;
