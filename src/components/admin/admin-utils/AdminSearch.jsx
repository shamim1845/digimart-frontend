import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Title from "../../utils/reUseableComponents/Title";
import Button from "../../utils/reUseableComponents/Buttons";

const AdminSearch = ({ setKeyWord, modalController, label }) => {
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
      <Title variant="h4" text={label} style={{ width: "auto" }} />

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
          placeholder={`Search ${label?.toLowerCase()}...`}
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
      <Button type="button" onClick={modalController} text="Create" />
    </ProductSearchContainer>
  );
};

export default AdminSearch;

const ProductSearchContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  background-color: #fff;
  padding: 2rem 1.6rem;
  display: flex;
  gap: 3rem;
  align-items: center;
  box-shadow: var(--shadow-2);

  form {
    flex: 1;
    width: 100% !important;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    box-shadow: var(--shadow-3);
    border-radius: 0.5rem;

    input {
      flex: 1;
      width: 100%;
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
