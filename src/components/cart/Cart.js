import React from "react";
import styled from "styled-components";
import CartDetails from "./CartDetails";
import CartOrderSummary from "./CartOrderSummary";
import PageContainer from "../utils/PageContainer";
import { useSelector } from "react-redux";
import EmptyItems from "../utils/EmptyItems";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.user);

  return (
    <PageContainer>
      <CartContainer>
        <CartDetails cartItem={cartItems} />
        {cartItems?.length > 0 && <CartOrderSummary />}
      </CartContainer>
      {cartItems?.length < 1 && (
        <EmptyItems
          text={"Your cart is empty."}
          link={"/products"}
          btnText={"Add Product"}
        />
      )}
    </PageContainer>
  );
};

export default Cart;

const CartContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;

  @media screen and (max-width: 1440px) {
    padding: 0 1rem;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
