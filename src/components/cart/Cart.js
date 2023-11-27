import React from "react";
import styled from "styled-components";
import CartList from "./CartList";
import CartOrderSummary from "./CartSummary";
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
        {isError && (
          <>
            {error.status === 404 ? (
              <EmptyItems
                text={error.data?.message || "Your cart is empty."}
                link={"/products"}
                btnText={"Add Product"}
              />
            ) : (
              <Error
                text={error.data?.message}
                style={{
                  padding: "10rem 0",
                  width: "100%",
                  background: "pink",
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            )}
          </>
        )}

        {isSuccess && (
          <>
            {data?.carts?.length ? (
              <ContentWrapper>
                <Title
                  variant="h1"
                  text={`Shopping Cart (${data?.carts?.length || 0})`}
                  style={{ marginBottom: "2rem" }}
                />
                <Content>
                  <CartList cartItem={data?.carts} />
                  <CartOrderSummary />
                </Content>
              </ContentWrapper>
            ) : (
              <EmptyItems
                text={"Your cart is empty."}
                link={"/products"}
                btnText={"Add Product"}
              />
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
  padding: 2rem 0;
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
