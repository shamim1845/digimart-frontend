import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "@mui/material/Slider";
import useDebounceHandler from "../../utils/customHooks/useDebounceHandler";

const initialValue = [0, 100000];
const AdminPriceSlider = ({ currentPrice, setCurrentPrice }) => {
  const [price, setPrice] = useState([initialValue[0], initialValue[1]]);

  useEffect(() => {
    setCurrentPrice({
      gte: initialValue[0],
      lte: initialValue[1],
    });
  }, [setCurrentPrice]);

  // => handle price slider
  const handleAddPrice = (val) => {
    setCurrentPrice({
      gte: val[0],
      lte: val[1],
    });
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
          min={initialValue[0]}
          max={initialValue[1]}
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
