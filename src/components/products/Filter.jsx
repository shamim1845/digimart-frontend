import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "@mui/material/Slider";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  fetchAsyncProductForFilter,
  fetchAsyncProducts,
  getAllProducts,
} from "../../features/products/productSlice";

export default function RangeSlider({ currentPage, setCurrentPage }) {
  const [price, setPrice] = useState([0, 120000]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };
  const { keyword, category, allCategories } = useSelector(getAllProducts);
  const catHandler = (cat) => {
    setCurrentPage(1);
    dispatch(addCategory(cat));
  };
  useEffect(() => {
    if (
      keyword === "" &&
      category === "" &&
      price[0] === 0 &&
      price[1] === 120000
    ) {
      dispatch(fetchAsyncProducts(currentPage));
    } else {
      dispatch(
        fetchAsyncProductForFilter({
          keyword: keyword,
          category,
          pricestart: price[0],
          priceend: price[1],
          currentPage,
        })
      );
    }
  }, [category, dispatch, price, keyword, currentPage, navigate]);

  return (
    <Container>
      {allCategories.categories && (
        <>
          <Price>
            <p className="title">Price</p>
            <Slider
              value={price}
              onChangeCommitted={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={120000}
            />
          </Price>
          <Categories>
            <p className="title">Categories</p>
            <ul>
              {allCategories?.categories?.map((cat, index) => {
                return (
                  <li
                    style={category === cat ? { color: "tomato" } : {}}
                    onClick={() => catHandler(cat)}
                    key={index}
                  >
                    {cat}
                  </li>
                );
              })}
            </ul>
          </Categories>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  .title {
    font-size: 14px;
    color: #212121;
    font-weight: 400;
  }
`;

const Price = styled.div`
  margin-bottom: 1.5rem;

  .MuiSlider-colorPrimary {
    color: tomato;
  }
  @media screen and (max-width: 768px) {
    width: 50%;
    text-align: center;
    margin: auto;
    /* margin-bottom: 1.3rem; */
  }
`;

const Categories = styled.div`
  ul {
    margin-top: 0.5rem;
    padding-left: 0;
    li {
      text-transform: capitalize;
      font-size: 1.3rem;
      color: #757575;
      line-height: 2rem;
      cursor: pointer;
      &:hover {
        color: tomato;
      }
    }
    .active {
      color: tomato;
    }
  }

  @media screen and (max-width: 768px) {
    width: 50%;
    text-align: center;
    margin: auto;
    ul {
      column-count: 3;

      li {
      }
    }
  }
`;
