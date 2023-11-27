import styled from "styled-components";
import { useGetAllCategoryQuery } from "../../../../redux/api/category/categoryAPI";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../../../redux/productFilter/productFilterSlice";
import { useNavigate } from "react-router-dom";
import Error from "../../../utils/fetchUtils/Error";

const Department = ({ setActiveDept, categoryBtnRef }) => {
  const [childCategories, setChildCategories] = useState([]);

  let categoryRef = useRef();

  // => Get categories
  const { isFetching, data, isSuccess, isError, error } =
    useGetAllCategoryQuery();

  //  hide category container when mouseDown outside of category Container
  useEffect(() => {
    function handleListener(e) {
      if (
        !categoryRef?.current?.contains(e.target) &&
        !categoryBtnRef?.current?.contains(e.target)
      ) {
        setActiveDept(false);
      }
    }

    document.addEventListener("mousedown", handleListener);
    return () => {
      document.removeEventListener("mousedown", handleListener);
    };
  }, [setActiveDept, categoryBtnRef]);

  return (
    <DepartmentContainer ref={categoryRef}>
      {isFetching && (
        <div style={{ fontSize: "1.3rem", padding: "2rem" }}>Fetching...</div>
      )}
      {isError && (
        <>
          {error.status === 404 ? (
            <div style={{ fontSize: "1.3rem", padding: "2rem" }}>
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

      {isSuccess && data?.category?.length > 0 && (
        <Category
          categories={data.category}
          setChildCategories={setChildCategories}
          depth={0}
        />
      )}

      {childCategories?.length > 0 &&
        childCategories.map((child, index) => {
          let depth = index + 1;

          return (
            <Category
              key={depth}
              categories={child}
              setChildCategories={setChildCategories}
              depth={depth}
            />
          );
        })}
    </DepartmentContainer>
  );
};

export default Department;

// Category Component
const Category = ({ categories, setChildCategories, depth }) => {
  const [activeCategory, setActiveCategory] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // category handler
  function catHandler(cat_slug) {
    dispatch(addCategory(cat_slug));
    navigate("/products");
  }

  // handle mouse enter
  const handleMouseEnter = (children, id) => {
    setChildCategories((prev) => {
      let arr = [...prev];
      arr = arr.slice(0, depth);

      if (children !== null) {
        arr[depth] = children;
      }

      return arr;
    });
    setActiveCategory(id);
  };

  return (
    <CategoryContainer>
      <ul>
        {categories.map((cat) => (
          <li
            key={cat._id}
            onClick={() => catHandler(cat.slug)}
            onMouseEnter={() => handleMouseEnter(cat.children, cat._id)}
          >
            <span>{cat.name}</span>
            {cat._id === activeCategory && cat.children !== null && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="tomato"
                className="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            )}
          </li>
        ))}
      </ul>
    </CategoryContainer>
  );
};

const DepartmentContainer = styled.div`
  position: absolute;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  left: 0;
  top: 7rem;
  z-index: 100;
  display: flex;
  border-radius: 0.5rem;
  width: 100%;
  overflow-x: auto;
`;

const CategoryContainer = styled.div`
  display: flex;
  border-left: 1px solid #e4e9eb;
  min-width: 18rem;
  max-width: max-content;
  padding: 0.5rem 1rem;

  &:first-child {
    border: none;
  }

  ul {
    padding: 0;
    line-height: 1.7;
    & li {
      text-transform: capitalize;
      display: flex;
      align-items: center;
      position: relative;
      font-size: 1.3rem;
      font-weight: 400;
      transition: all 10ms;
      cursor: pointer;
      &:hover {
        color: tomato;
      }
      svg {
        margin-left: 1rem;
      }
    }
  }
`;
