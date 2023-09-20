import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLimit } from "../../redux/productFilter/productFilterSlice";
import styled from "styled-components";

const ProductPerPage = () => {
  const dispatch = useDispatch();
  const { limit } = useSelector((state) => state.productFilter);

  const handleLimitChange = (e) => {
    dispatch(addLimit(e.target.value));
  };

  return (
    <ProductPerPageContainer>
      <span>Product per page</span>
      <select value={limit} onChange={handleLimitChange}>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </select>
    </ProductPerPageContainer>
  );
};

export default ProductPerPage;

const ProductPerPageContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  align-items: center;

  span {
    font-size: 1.3rem;
    color: var(--text-primary);
    font-weight: 600;
  }

  select {
    border: none;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
      rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    padding: 1rem;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
    font-size: 1.3rem;
    color: var(--text-primary);
    font-weight: 500;
  }
`;
