import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { getAllProducts } from "../../features/products/productSlice";
import PageContainer from "../utils/PageContainer";
import Loading from "../utils/Loading";
import Filter from "./Filter";
import Product from "./Product";

const AllProductDisplay = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const productDetails = useSelector(getAllProducts);
  const { loading, fetchProduct } = productDetails;
  // console.log(fetchProduct);

  const paginationLinkHandler = (page) => {
    setCurrentPage(page);
  };

  const prevHandler = (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextHandler = (e) => {
    e.preventDefault();
    if (currentPage < fetchProduct.page.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      {loading && <Loading />}

      <PageContainer>
        <MainTitle>
          <h2>Products</h2>
        </MainTitle>

        <ProductContainer>
          <FilterBox>
            <Filter currentPage={currentPage} />
          </FilterBox>

          <ProductBox>
            {fetchProduct.products &&
              fetchProduct.products.map((product) => {
                return <Product key={product._id} product={product} />;
              })}
          </ProductBox>
        </ProductContainer>

        <Pagination>
          <Prev>
            <button onClick={prevHandler}>prev</button>
          </Prev>
          <Page>
            {fetchProduct.page &&
              fetchProduct.page.map((page) => {
                return (
                  <p
                    style={
                      page === currentPage
                        ? { background: "#666", color: "#fff" }
                        : null
                    }
                    key={page}
                    onClick={() => paginationLinkHandler(page)}
                  >
                    {page}
                  </p>
                );
              })}
          </Page>
          <Next>
            <button onClick={nextHandler}>Next</button>
          </Next>
        </Pagination>
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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  overflow: hidden;
`;
const Prev = styled.div`
  button {
    background-color: tomato;
    border: none;
    overflow-x: auto;
    white-space: nowrap;
    padding: 0.5rem 2rem;
    border-radius: 3px;
    cursor: pointer;
  }
`;
const Page = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 1rem;

  p {
    font-size: 2rem;
    padding: 0 0.7rem;
    margin: 0 0.5rem;
    border-radius: 0.3rem;
    cursor: pointer;
    &:hover {
      background: #666;
      color: #fff;
    }
  }
`;
const Next = styled(Prev)``;
