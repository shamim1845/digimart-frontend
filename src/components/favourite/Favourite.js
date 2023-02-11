import React from "react";
import styled from "styled-components";
import PageContainer from "../utils/PageContainer";
import { useSelector } from "react-redux";

import FavouriteDetails from "./FavouriteDetails";
import EmptyItems from "../utils/EmptyItems";

const Favourite = () => {
  const { favouriteItems } = useSelector((state) => state.user);

  return (
    <PageContainer>
      <CartContainer>
        <FavouriteDetails cartItem={favouriteItems} />
        {favouriteItems.length < 1 && (
          <EmptyItems
            text={"Oops! Your favourite list is empty."}
            link={"/products"}
            btnText={"Add Product"}
          />
        )}
      </CartContainer>
    </PageContainer>
  );
};

export default Favourite;

const CartContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;

  @media screen and (max-width: 1440px) {
    padding: 0 1rem;
  }
`;
