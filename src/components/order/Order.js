import React from "react";
import styled from "styled-components";
import PageContainer from "../utils/PageContainer";
import OrderSummary from "./OrderSummary";
import OrderDetails from "./OrderDetails";
import { useGetMyCartListQuery } from "../../redux/api/cart/cartAPI";
import EmptyItems from "../utils/EmptyItems";
import Error from "../utils/fetchUtils/Error";

const Order = () => {
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
              <Content>
                <OrderDetails />
                <OrderSummary />
              </Content>
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

export default Order;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 2rem 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 5rem;
  }
`;
