import React from "react";
import styled from "styled-components";
import { useGetNewArivalsQuery } from "../../../redux/api/products/productsAPI";
import Product from "../../products/ProductCard";
import Pagination from "../../utils/Pagination";
import ProductCardSkeleton from "../../utils/skeleton/ProductCardSkeleton";
import NotFound from "../../utils/fetchUtils/NotFound";
import Error from "../../utils/fetchUtils/Error";

const Products = ({ category, currentPage, setCurrentPage }) => {
  console.log("Products(NewArivals).js render =>");

  // Fetch New Arrivals Products
  const { isLoading, isFetching, isSuccess, data, isError, error } =
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
            <NotFound text="No products found." />
          ) : (
            <Error text={error?.message} style={{ justifyContent: "center" }} />
          )}
        </>
      )}

      <ProductBox>
        {(isLoading || isFetching) && (
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        )}

        {!isLoading &&
          !isFetching &&
          !isError &&
          isSuccess &&
          data?.products.map((product) => {
            return <Product key={product._id} product={product} />;
          })}
      </ProductBox>

      {!isLoading &&
        !isFetching &&
        !isError &&
        isSuccess &&
        data?.pagination?.length > 1 && (
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
  gap: 1rem;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;
