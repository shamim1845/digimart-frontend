import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrency } from "../../../redux/user/userSelector";
import currencyConverter from "../helperFunction/currencyConverter";

const Currency = ({ price }) => {
  const [amount, setAmount] = useState(null);

  const currency = useSelector(selectCurrency);

  currencyConverter({ amount: price, from: "USD", to: currency }).then(
    (res) => {
      setAmount(res);
    }
  );

  const currencySign = {
    USD: "$",
    BDT: "৳",
  };

  return (
    <>
      <span> {currencySign[currency]}</span>
      <span> {amount}</span>
    </>
  );
};

export default Currency;
