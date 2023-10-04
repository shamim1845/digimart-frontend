import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Title from "../../utils/reUseableComponents/Title";
import Button from "../../utils/reUseableComponents/Buttons";
import TuneIcon from "@mui/icons-material/Tune";
import { styled as btnStyle } from "@mui/material/styles";
import AdminPriceSlider from "./AdminPriceSlider";
import AdminCategoriesFilter from "./AdminCategoriesFilter";

// Mui custom Button
const AddToCart = btnStyle(Button)({
  backgroundColor: "tomato",
  color: "#000",
  borderRadius: "4px",
  fontSize: "1.3rem",
  height: "100%",
  padding: "0.5rem 1rem",
  transition: "all 0.5s",
  "&:hover": {
    backgroundColor: "red",
  },
});

const AdminProductSearch = ({ setKeyWord }) => {
  const [activeFilter, setActiveFilter] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);

  const handleSubmit = (val) => {
    setKeyWord(val);
  };

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

  const request = debounce(handleSubmit, 500);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceRequest = useCallback((val) => request(val), []);

  // Handle Input Change
  const handleChange = (e) => {
    setValue(e.target.value);
    debounceRequest(e.target.value);
  };

  // Clear SearchBar
  const clearSearchHandler = () => {
    setKeyWord("");
    setValue("");
  };

  return (
    <ProductSearchContainer>
      <ContainerTop>
        {" "}
        <Title variant="h4" text="Products" style={{ width: "auto" }} />
        <form onSubmit={(e) => e.preventDefault()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={`${focus ? "18" : "16"}`}
            height={`${focus ? "18" : "16"}`}
            fill={`${focus ? "#000000b2" : "#666"}`}
            className="bi bi-search"
            viewBox="0 0 16 16"
            style={{ transition: "all 0.1s ease-in-out" }}
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>

          <input
            onChange={handleChange}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            value={value}
            type="text"
            placeholder="Search product..."
            required
          />
          {value && (
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
        </form>
        <Button
          text={"Filter"}
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          onClick={() => setActiveFilter((prev) => !prev)}
        >
          <TuneIcon />
        </Button>
      </ContainerTop>

      <FilterContainer activeFilter={activeFilter}>
        <AdminPriceSlider />
        <div>
          <p className="title">Categories</p>
          <AdminCategoriesFilter
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          <br />
          <ClearFilter>
            <AddToCart variant="contained" onClick={() => {}}>
              <span>Clear Filter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </AddToCart>
          </ClearFilter>
        </div>
      </FilterContainer>
    </ProductSearchContainer>
  );
};

export default AdminProductSearch;

const ProductSearchContainer = styled.div`
  box-shadow: var(--shadow-2);
`;

const ContainerTop = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  padding: 2rem 1.6rem;
  margin-bottom: 2rem;
  display: flex;
  gap: 3rem;
  align-items: center;

  form {
    width: 100% !important;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    font-size: 1.3rem;
    box-shadow: var(--shadow-3);
    border-radius: 0.5rem;

    input {
      flex: 1;
      height: 100%;
      width: 6rem;
      border: none;
      padding-left: 1rem;
      border-radius: 0.5rem 0 0 0.5rem;
      font-size: 1.4rem;
      &::placeholder {
        font-size: 1.3rem;
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
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f3f2f1;
  padding: 2rem;
  transition: display 0.3s ease-in-out;
  display: ${({ activeFilter }) => (activeFilter ? "flex" : "none")};
`;

const ClearFilter = styled.div`
  button {
    display: flex;
    gap: 1rem;
  }
`;
