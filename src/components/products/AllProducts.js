import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { getAllProducts } from "../../features/products/productSlice";
import PageContainer from "../utils/PageContainer";
import Loading from "../utils/Loading";
import Filter from "./Filter";
import Product from "./Product";
import Pagination from "../utils/Pagination";

const AllProductDisplay = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const productDetails = useSelector(getAllProducts);
  const { loading, fetchProduct } = productDetails;

  return (
    <>
      {loading && <Loading />}

      <PageContainer>
        <MainTitle>
          <h2>Products</h2>
        </MainTitle>

        <ProductContainer>
          <FilterBox>
            <Filter currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </FilterBox>

          <ProductBox>
            {fetchProduct.products &&
              fetchProduct.products.map((product) => {
                return <Product key={product._id} product={product} />;
              })}
          </ProductBox>
        </ProductContainer>
        {fetchProduct?.page?.length > 0 && (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pages={fetchProduct.page}
          />
        )}
      </PageContainer>
    </>
  );
};

export default AllProductDisplay;

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
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const FilterBox = styled.div`
  padding-left: 1.5rem;
  padding-right: 1rem;
  width: 10%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const ProductBox = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  gap: 1rem;
  margin-left: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;
