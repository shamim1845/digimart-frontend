import React, { useState } from "react";
import styled from "styled-components";
import { useGetAllCategoryQuery } from "../../../../redux/api/category/categoryAPI";
import Error from "../../../utils/fetchUtils/Error";
import { useDispatch, useSelector } from "react-redux";
import { selectproductFilterCategory } from "../../../../redux/productFilter/productFilterSelector";
import {
  addCategory,
  addPage,
} from "../../../../redux/productFilter/productFilterSlice";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  // Fetch categories
  const { data, isSuccess, isError, error } = useGetAllCategoryQuery();

  return (
    <CategoriesContainer>
      {isError && (
        <>
          {error.status === 404 ? (
            <div style={{ fontSize: "1.3rem", padding: "1rem 0" }}>
              {error?.data?.message}
            </div>
          ) : (
            <Error text={error?.message} style={{ marginTop: "1rem" }} />
          )}
        </>
      )}

      {isSuccess && data?.category && (
        <ul>
          <SubCategory category={data?.category} />
        </ul>
      )}
    </CategoriesContainer>
  );
};

export default Categories;

const CategoriesContainer = styled.div`
  user-select: none;
  ul {
    li {
      text-transform: capitalize;
      font-size: 1.3rem;
      color: #757575;
      line-height: 2rem;
      &:hover {
        color: tomato;
      }

      .category {
        cursor: pointer;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        margin: 0.5rem 0;

        input {
          cursor: pointer;
        }
      }
      ul {
        margin-left: 2.5rem;
      }
    }
  }
`;

const SubCategory = ({ category }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // redux state
  const checkedCategory = useSelector(selectproductFilterCategory);

  // Check Box Handler
  const checkBoxHandler = (cat) => {
    dispatch(addPage(1));
    dispatch(addCategory(cat?.slug === checkedCategory ? "" : cat?.slug));
    navigate("/products");
  };

  return (
    <ul>
      {category?.map((cat, index) => {
        return (
          <li key={index}>
            <div
              className="category"
              onClick={() => checkBoxHandler(cat)}
              onMouseEnter={() => setActiveCategory(cat)}
            >
              <input
                type="checkbox"
                checked={cat.slug === checkedCategory}
                onChange={() => checkBoxHandler(cat)}
              />
              <span>{cat.name}</span>
            </div>

            {cat?._id === activeCategory?._id && (
              <SubCategory category={activeCategory?.children} />
            )}
          </li>
        );
      })}
    </ul>
  );
};
