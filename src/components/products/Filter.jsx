import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "@mui/material/Slider";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  addKeyword,
  fetchAsyncProductForFilter,
  fetchAsyncProducts,
  getAllProducts,
} from "../../features/products/productSlice";

export default function RangeSlider({ currentPage, setCurrentPage }) {
  const [price, setPrice] = useState([0, 200000]);
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
      price[1] === 200000
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
  function clearFilter() {
    if (
      keyword ||
      category ||
      currentPage !== 1 ||
      price[0] !== 0 ||
      price[1] !== 200000
    ) {
      dispatch(addKeyword(""));
      dispatch(addCategory(""));
      setPrice([0, 200000]);
      setCurrentPage(1);
    }
  }

  return (
    <Container>
      {allCategories.categories && (
        <ContentWrapper>
          <Price>
            <p className="title">Price</p>
            <Slider
              value={price}
              onChangeCommitted={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={200000}
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
          <ClearFilter>
            <button onClick={clearFilter}>Clear filter</button>
          </ClearFilter>
        </ContentWrapper>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  .title {
    font-size: 14px;
    color: #212121;
    font-weight: 400;
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  min-width: 50%;
`;

const Price = styled.div`
  margin-bottom: 1.5rem;

  .MuiSlider-colorPrimary {
    color: tomato;
  }
  @media screen and (max-width: 768px) {
    text-align: start;
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
    text-align: start;
    margin: auto;
    ul {
      column-count: 3;

      li {
      }
    }
  }
`;

const ClearFilter = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: start;
    margin: 2rem 0;
    width: 100%;
  }
  button {
    background: tomato;
    border: none;
    outline: none;
    padding: 0.5rem;
    font-size: 1.2rem;
  }
`;
