import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { addPrice } from "../../redux/productFilter/productFilterSlice";

const PriceSlider = () => {
  const initialPrice = [0, 200000];
  const [price, setPrice] = useState([initialPrice[0], initialPrice[1]]);
  const dispatch = useDispatch();

  const { price: prevPrice } = useSelector((state) => state.productFilter);

  // => set previous price from redux store on component remount
  useEffect(() => {
    if (prevPrice.gte && prevPrice.lte) {
      setPrice([prevPrice.gte, prevPrice.lte]);
    }
  }, [prevPrice]);

  // => handle price slider
  const handleAddPrice = (val) => {
    dispatch(
      addPrice({
        gte: val[0],
        lte: val[1],
      })
    );
  };

  // => Debounce function for reduce network call
  const debounce = (fn, delay) => {
    let timerID;
    return (...val) => {
      if (timerID) {
        clearTimeout(timerID);
      }

      timerID = setTimeout(() => {
        fn.apply(this, val);
      }, delay);
    };
  };

  const request = debounce(handleAddPrice, 500);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceRequest = useCallback((val) => request(val), []);

  // => price slider onChange handler
  const handleChange = (event, value) => {
    setPrice(value);
    debounceRequest(value);
  };

  return (
    <Price>
      <p className="title">Price</p>
      <div className="slider">
        <Slider
          value={price}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={initialPrice[0]}
          max={initialPrice[1]}
        />
      </div>
    </Price>
  );
};

export default PriceSlider;

const Price = styled.div`
  margin-bottom: 1.5rem;
  .title {
    font-size: 1.5rem;
    color: var(--text-primary);
    font-weight: 500;
    width: 100%;
    margin-bottom: 0.5rem;
  }
  .slider {
    padding: 0 1rem;
  }
  .MuiSlider-colorPrimary {
    color: tomato;
  }
  @media screen and (max-width: 768px) {
    text-align: start;
  }
`;
