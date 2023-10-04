import React from "react";
import styled from "styled-components";
import FavouriteProductCard from "./FavouriteProductCard";
import Title from "../utils/reUseableComponents/Title";

const FavouriteList = ({ favouriteItems }) => {
  return (
    <Container>
      <Title
        variant="h1"
        text={`Default Wish List (${favouriteItems?.length || 0})`}
        style={{ color: "var(--text-secondary)", margin: "1.5rem 0" }}
      />

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
