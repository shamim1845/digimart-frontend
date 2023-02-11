import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import PageContainer from "../utils/PageContainer";
import Loading from "../utils/Loading";
import Filter from "./Filter";
import Product from "./ProductCard";
import Pagination from "../utils/Pagination";

const AllProductDisplay = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const productDetails = useSelector((state) => state.products);
  const { loading, allProducts } = productDetails;

  return (
    <>
      {loading && <Loading />}

      <PageContainer>
        <MainTitle>
          <h2>Product List</h2>
        </MainTitle>

        <ProductContainer>
          <FilterBox>
            <Filter currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </FilterBox>
          {allProducts?.products?.length > 0 && (
            <ProductBox>
              {allProducts.products.map((product) => {
                return <Product key={product._id} product={product} />;
              })}
            </ProductBox>
          )}

          {allProducts?.products?.length === 0 && (
            <NoProduct>
              <h3>No products found...</h3>
            </NoProduct>
          )}
        </ProductContainer>
        {allProducts?.page?.length > 1 && (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pages={allProducts.page}
          />
        )}
      </PageContainer>
    </>
  );
};

export default AllProductDisplay;
const NoProduct = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainTitle = styled.div`
  margin: 3rem 0 2rem 0;
  h2 {
    border-bottom: 4px solid #ddd;
    font-size: 3rem;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1440px;
  margin-bottom: 2rem;
  /* background-color: rebeccapurple; */

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const FilterBox = styled.div`
  padding: 0 1.5rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const ProductBox = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  place-items: center;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;
