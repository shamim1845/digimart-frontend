import React, { useState } from "react";
import { useGetAllCategoryQuery } from "../../../redux/api/category/categoryAPI";
import styled from "styled-components";
import Error from "../fetchUtils/Error";
import ValidationError from "../validationUtils/ValidationError";

const CategorySelector = ({
  label,
  categories,
  setCategories,
  categoriesError,
  setCategoriesError,
}) => {
  const [parentCatValue, setParentCatValue] = useState("");
  const [subCategory, setSubCategory] = useState([]);

  // fetch categories
  const { data, isLoading, isError, error, isSuccess } =
    useGetAllCategoryQuery();

  // handle category change
  const handleChange = (e, depthLevel) => {
    if (depthLevel === 0) {
      setParentCatValue(e.target.value);
    }

    const { _id, slug, children } = JSON.parse(e.target.value);

    if (!slug) {
      setCategories([]);
      setSubCategory([]);
      setParentCatValue(e.target.value);
      return;
    }

    setCategories((prev) => {
      const prevCopy = prev.slice(0, depthLevel);
      return [...prevCopy, { category_id: _id, category_slug: slug }];
    });
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

      {isError && (
        <>
          {error.status === 404 ? (
            <div style={{ fontSize: "1.2rem", padding: "0.5rem 0" }}>
              {error?.data?.message}
            </div>
          ) : (
            <Error
              text={error?.message}
              style={{ fontSize: "1.3rem", padding: "2rem" }}
            />
          )}
        </>
      )}

      {isSuccess && (
        <>
          <select
            value={parentCatValue}
            onChange={(e) => handleChange(e, 0)}
            onBlur={() => {
              !categories?.length &&
                setCategoriesError &&
                setCategoriesError("Category is required.");
            }}
          >
            <option value={JSON.stringify({})}>Select a category</option>
            {data?.category?.map((cat) => (
              <option key={cat._id} value={JSON.stringify(cat)}>
                {cat.name}
              </option>
            ))}
          </select>

          {/* Sub category */}
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
      {categoriesError && <ValidationError message={categoriesError} />}
    </Container>
  );
};

export default CategorySelector;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  label {
    font-size: 1.3rem;
    color: var(--text-secondary);
  }
  select {
    background: #fff;
    color: var(--text-primary);
    margin-top: 0.5rem;
    width: 100%;
    height: 4rem;
    padding: 0 1rem;
    border: none;
    outline: none;
    font-size: 1.3rem;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    &:focus {
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
  }
`;
