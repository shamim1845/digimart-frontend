import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { styled as btn } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { addKeyword } from "../../../../redux/productFilter/productFilterSlice";
import { useNavigate } from "react-router-dom";
import { selectproductFilterKeyword } from "../../../../redux/productFilter/productFilterSelector";
import useDebounceHandler from "../../../utils/customHooks/useDebounceHandler";

const ProductSearch = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Custom Material UI Button
  const SearchBtn = btn(Button)({
    minWidth: "100%",
    backgroundColor: "tomato",
    padding: "1rem",
    transition: "all 0.5s ease-in-out",
    "&:hover": {
      backgroundColor: "#ff6347c1",
      transform: "scale(1.2)",
    },
  });

  // => Redux state
  const keyword = useSelector(selectproductFilterKeyword);

  // => Effect for setSearchKeyword from previous search keyword
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  // => Handle product search
  const handleSubmit = (val) => {
    dispatch(addKeyword(val));
    navigate("/products");
  };

  // custom hooks for debounce handling
  const debounceRequest = useDebounceHandler(handleSubmit);

  // Handle Input Change
  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
    debounceRequest(e.target.value);
  };

  // SearchBar Handler
  const searchHandler = (e) => {
    e.preventDefault();

    if (!searchKeyword) return;
    handleSubmit(searchKeyword);
  };

  // Clear SearchBar
  const clearSearchHandler = () => {
    dispatch(addKeyword(""));
  };

  return (
    <ProductSearchContainer>
      <form onSubmit={searchHandler}>
        <input
          onChange={handleChange}
          value={searchKeyword}
          type="text"
          placeholder="What are you looking for?"
        />
        {searchKeyword && (
          <div className="search_clear" onClick={clearSearchHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </div>
        )}
        <div className="search_button">
          <SearchBtn type="submit">
            <img src="/images/icons/search.svg" alt="search icon" />
          </SearchBtn>
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
    gap: 0.5rem;
    padding: 0.5rem 0;

    input {
      flex: 1;
      height: 100%;
      width: 6rem;
      border: none;
      padding-left: 1rem;
      border-radius: 0.5rem 0 0 0.5rem;
      font-size: 1.4rem;
      &::placeholder {
        font-size: 1.4rem;
      }

      &:focus {
        outline: none;
      }
    }
    .search_clear {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 1rem;
      cursor: pointer;
      &:hover {
        svg {
          color: red;
        }
      }
    }
    .search_button {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 0.4rem;
    }
  }
`;
