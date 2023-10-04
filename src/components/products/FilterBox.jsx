import React, { useRef, useState } from "react";
import styled from "styled-components";
import { styled as btnStyle } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  addPage,
  clearFilter,
} from "../../redux/productFilter/productFilterSlice";
import PriceSlider from "./PriceSlider";
import { selectproductFilterCategory } from "../../redux/productFilter/productFilterSelector";
import Categories from "../layout/header/mobile/Categories";
import useSidebarHandler from "../utils/customHooks/useSidebarHandler";

const FilterBox = ({ activeFilter, setActiveFilter }) => {
  const dispatch = useDispatch();
  const filterBoxRef = useRef(null);

  // Custom hooks for handling sidebar when mousedown inside of sidebar
  useSidebarHandler(filterBoxRef, setActiveFilter);

  // Handle Filter clear
  function clearFilterHandler() {
    dispatch(clearFilter());
    setActiveFilter(false);
  }

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

  return (
    <FilterBoxContainer ref={filterBoxRef} activeFilter={activeFilter}>
      <CloseButton onClick={() => setActiveFilter(false)}>
        <i className="bi bi-x"></i>
      </CloseButton>

      <br />

      <PriceSlider />
      <Content>
        <p className="title">Categories</p>
        <Categories />

        <br />
        <ClearFilter>
          <AddToCart variant="contained" onClick={clearFilterHandler}>
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
      </Content>
    </FilterBoxContainer>
  );
};

export default React.memo(FilterBox);

const FilterBoxContainer = styled.div`
  height: 100%;
  min-width: 18rem;

  @media screen and (max-width: 768px) {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    width: 100%;
    max-width: 30rem;
    height: 100vh;
    z-index: 10000 !important;
    background-color: aliceblue;
    padding: 2rem;
    transition: all 0.5s ease-in-out;
    position: fixed;
    top: 0;
    left: ${({ activeFilter }) => (activeFilter ? 0 : "-100vw")};
    z-index: 10000;
  }
`;

const CloseButton = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 2rem;
  }

  i {
    display: block;
    font-size: 3.5rem;
    cursor: pointer;
    transition: all 250ms;
    &:hover {
      color: #000;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  overflow-x: hidden;
  overflow-y: auto;

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
  }

  .title {
    font-size: 1.5rem;
    color: var(--text-primary);
    font-weight: 500;
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;

const ClearFilter = styled.div`
  button {
    display: flex;
    gap: 1rem;
  }
`;

//
// const SubCategory = ({ category, setActiveFilter }) => {
//   const [activeCategory, setActiveCategory] = useState(null);

//   const dispatch = useDispatch();

//   // redux state
//   const checkedCategory = useSelector(selectproductFilterCategory);

//   // Check Box Handler
//   const checkBoxHandler = (cat) => {
//     dispatch(addPage(1));
//     dispatch(addCategory(cat?.slug === checkedCategory ? "" : cat?.slug));
//     setActiveFilter(false);
//   };

//   return (
//     <ul>
//       {category?.map((cat, index) => {
//         return (
//           <li key={index}>
//             <div
//               className="category"
//               onClick={() => checkBoxHandler(cat)}
//               onMouseEnter={() => setActiveCategory(cat)}
//             >
//               <input
//                 type="checkbox"
//                 checked={cat.slug === checkedCategory}
//                 onChange={() => checkBoxHandler(cat)}
//               />
//               <span>{cat.name}</span>
//             </div>

//             {cat?._id === activeCategory?._id && (
//               <SubCategory
//                 category={activeCategory?.children}
//                 setActiveFilter={setActiveFilter}
//               />
//             )}
//           </li>
//         );
//       })}
//     </ul>
//   );
// };
