import React, { useState } from "react";
import styled from "styled-components";
import Slider from "@mui/material/Slider";
import useDebounceHandler from "../../utils/customHooks/useDebounceHandler";

const AdminPriceSlider = () => {
  const initialPrice = [0, 200000];
  const [price, setPrice] = useState([initialPrice[0], initialPrice[1]]);

  // => handle price slider
  const handleAddPrice = (val) => {
    console.log(val);
  };

  const debounceRequest = useDebounceHandler(handleAddPrice);

  // => price slider onChange handler
  const handleChange = (event, value) => {
    setPrice(value);
    debounceRequest(value);
  };

  return (
    <Container>
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
    </Container>
  );
};

export default AdminPriceSlider;

const Container = styled.div`
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
