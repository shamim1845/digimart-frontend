import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addKeyword } from "../../features/productFilter/productFilterSlice";

const ProductSearch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyWord] = useState("");

  // select data from redux store
  const { keyword } = useSelector((state) => state.productFilter);

  // Set KeyWord if already exist in redux store
  useEffect(() => {
    setSearchKeyWord(keyword);
  }, [keyword]);

  // Search Bar Handler
  const searchHandler = (e) => {
    e.preventDefault();
    if (!searchKeyword) return;
    dispatch(addKeyword(searchKeyword));
    navigate("/products");
  };
  return (
    <ProductSearchContainer>
      <form onSubmit={searchHandler}>
        <input
          type="text"
          value={searchKeyword}
          placeholder="What are you looking for..."
          onChange={(e) => setSearchKeyWord(e.target.value)}
        />
        <div className="search_button">
          <button type="submit">
            <img src="/images/icons/search.svg" alt="" />
          </button>
        </div>
      </form>
    </ProductSearchContainer>
  );
};

export default ProductSearch;

const ProductSearchContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;

  form {
    width: 100% !important;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      flex: 1;
      height: 100%;
      border: none;
      padding-left: 1rem;
      border-radius: 0.5rem;
      font-size: 1.4rem;
      &::placeholder {
        font-size: 1.4rem;
      }

      &:focus {
        outline: none;
      }
    }
    .search_button {
      width: 5rem;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: 0.3rem;

      button {
        cursor: pointer;
        display: flex;
        align-items: center;
        background-color: tomato;
        border: none;
        padding: 1.1rem;
        border-radius: 0.3rem;
        transition: all 0.5s;
        &:hover {
          background-color: #ff6347c1;
          transform: scale(1.2);
        }
      }
    }
  }
`;
