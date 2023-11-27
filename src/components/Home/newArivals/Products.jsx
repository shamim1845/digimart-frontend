import React from "react";
import styled from "styled-components";
import { useGetNewArivalsQuery } from "../../../redux/api/products/productsAPI";
import Product from "../../products/ProductCard";
import Pagination from "../../utils/Pagination";
import ProductCardSkeleton from "../../utils/skeleton/ProductCardSkeleton";
import NotFound from "../../utils/fetchUtils/NotFound";
import Error from "../../utils/fetchUtils/Error";

const Products = ({ category, currentPage, setCurrentPage }) => {
  // Fetch New Arrivals Products
  const { isFetching, isLoading, isSuccess, data, isError, error } =
    useGetNewArivalsQuery(
      { category, currentPage },
      {
        refetchOnReconnect: true,
      }
    );

  return (
    <ProductContainer>
      {isError && (
        <>
          {error.status === 404 ? (
            <NotFound text="No product found." />
          ) : (
            <Error
              text={error?.data?.message}
              style={{ justifyContent: "center" }}
            />
          )}
        </>
      )}

      {(isLoading || isFetching) && (
        <ProductBox>
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </ProductBox>
      )}

      {isSuccess && (
        <ProductBox>
          {data?.products.map((product) => {
            return <Product key={product._id} product={product} />;
          })}
        </ProductBox>
      )}

      {isSuccess && data?.pagination?.length > 1 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pages={data.pagination}
        />
      )}
    </ProductContainer>
  );
};

export default Products;

const ProductContainer = styled.div`
  width: 100%;
`;

const ProductBox = styled.div`
  width: 100%;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;
