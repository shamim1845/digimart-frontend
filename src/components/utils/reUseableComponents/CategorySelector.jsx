import React, { useState } from "react";
import { useGetAllCategoryQuery } from "../../../redux/api/category/categoryAPI";
import styled from "styled-components";
import Error from "../fetchUtils/Error";
import ValidationError from "../validationUtils/ValidationError";

const CategorySelector = ({
  label,
  category,
  setCategory,
  categoryError,
  setCategoryError,
}) => {
  const [parentCatValue, setParentCatValue] = useState("");
  const [subCategory, setSubCategory] = useState([]);
  const { data, isLoading, isError, error, isSuccess } =
    useGetAllCategoryQuery();

  const handleChange = (e, depthLevel) => {
    if (depthLevel === 0) {
      setParentCatValue(e.target.value);
    }

    const { _id, slug, children } = JSON.parse(e.target.value);

    if (!slug) {
      setCategory(null);
      setSubCategory([]);
      setParentCatValue(JSON.stringify({}));
      return;
    }

    setCategory({ _id, slug });
    setSubCategory((prev) => {
      const prevCopy = prev.slice(0, depthLevel);
      if (!children) return prevCopy;
      return [...prevCopy, children];
    });
  };

  return (
    <Container>
      <label>{label}</label>

      {isLoading && <div>Loading...</div>}
      {isError && <Error text={error.message} />}

      {isSuccess && (
        <>
          <select
            value={parentCatValue}
            onChange={(e) => handleChange(e, 0)}
            onBlur={() => {
              !category &&
                setCategoryError &&
                setCategoryError("Category is required.");
            }}
          >
            <option value={JSON.stringify({})}>Select a category</option>
            {data?.category?.map((cat) => (
              <option key={cat._id} value={JSON.stringify(cat)}>
                {cat.name}
              </option>
            ))}
          </select>
          {subCategory?.map((category, index) => (
            <select key={index} onChange={(e) => handleChange(e, index + 1)}>
              <option value={JSON.stringify({})}>Select a sub-category</option>
              {category?.map((cat) => (
                <option key={cat._id} value={JSON.stringify(cat)}>
                  {cat.name}
                </option>
              ))}
            </select>
          ))}
        </>
      )}
      {categoryError && <ValidationError message={categoryError} />}
    </Container>
  );
};

export default CategorySelector;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  label {
    font-size: 1.3rem;
    color: var(--text-secondary);
  }
  select {
    background: #fff;
    color: var(--text-secondary);
    margin-top: 0.5rem;
    width: 100%;
    height: 3.5rem;
    padding: 0 1rem;
    border: none;
    outline: none;
    font-size: 1.3rem;
    &:focus {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      color: #000;
    }
    &::placeholder {
      font-size: 1.2rem;
    }
  }
`;
