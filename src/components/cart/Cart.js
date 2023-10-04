import React from "react";
import styled from "styled-components";
import CartList from "./CartList";
import CartOrderSummary from "./CartOrderSummary";
import PageContainer from "../utils/PageContainer";
import EmptyItems from "../utils/EmptyItems";
import { useGetMyCartListQuery } from "../../redux/api/cart/cartAPI";
import Error from "../utils/fetchUtils/Error";
import Title from "../utils/reUseableComponents/Title";

const Cart = () => {
  // get my cart list
  const { isSuccess, data, isError, error } = useGetMyCartListQuery();

  return (
    <PageContainer>
      <Container>
        {isError && <Error text={error?.data?.message} />}
        {isSuccess && (
          <>
            {!data?.carts?.length ? (
              <EmptyItems
                text={"Your cart is empty."}
                link={"/products"}
                btnText={"Add Product"}
              />
            ) : (
              <ContentWrapper>
                <Title
                  variant="h1"
                  text={`Shopping Cart (${data?.carts?.length || 0})`}
                  style={{ padding: "2rem 0" }}
                />
                <Content>
                  <CartList cartItem={data?.carts} />
                  <CartOrderSummary />
                </Content>
              </ContentWrapper>
            )}
          </>
        )}
      </Container>
    </PageContainer>
  );
};

export default Cart;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
