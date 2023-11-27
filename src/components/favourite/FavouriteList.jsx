import React from "react";
import styled from "styled-components";
import FavouriteProductCard from "./FavouriteProductCard";

const FavouriteList = ({ favouriteItems }) => {
  return (
    <Container>
      {favouriteItems?.length &&
        favouriteItems?.map((product) => {
          return <FavouriteProductCard key={product._id} product={product} />;
        })}
    </Container>
  );
};

export default FavouriteList;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
`;
