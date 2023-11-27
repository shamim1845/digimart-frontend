import React, { useState } from "react";
import styled from "styled-components";
import ShippingInfo from "./ShippingInfo";
import StripePayment from "./StripePayment";
import { useGetMyCartListQuery } from "../../redux/api/cart/cartAPI";
import CartList from "../cart/CartList";
import Title from "../utils/reUseableComponents/Title";
import EmptyItems from "../utils/EmptyItems";

const OrderDetails = () => {
  const [isShipping, setIsShipping] = useState(false);
  const [paymentProvider, setPaymentProvider] = useState("");

  const paymentHandler = (provider) => {
    setPaymentProvider(provider);
  };

  // get my cart list
  const { data } = useGetMyCartListQuery();

  return (
    <Container>
      <ShippingContainer>
        <Title
          variant="h2"
          text={"Shipping Information"}
          style={{ marginBottom: "1rem" }}
        />
        <ShippingInfo setIsShipping={setIsShipping} />
      </ShippingContainer>

      {isShipping && (
        <PaymentContainer>
          <Title
            variant="h2"
            text={"Choose a Payment Methods"}
            style={{ marginBottom: "1rem" }}
          />
          <div className="payment_provider">
            <img
              style={
                paymentProvider === "stripe"
                  ? { border: "2px solid tomato" }
                  : {}
              }
              src="./images/payment/stripe.png"
              alt="Stripe"
              onClick={() => paymentHandler("stripe")}
            />
          </div>

          {paymentProvider === "stripe" && <StripePayment />}
        </PaymentContainer>
      )}

      <ProductContainer>
        <Title
          variant="h2"
          text={`Order Review(${data?.carts?.length})`}
          style={{ marginBottom: "1rem" }}
        />

        {data?.carts?.length === 0 ? (
          <EmptyItems
            text={"Your cart is empty."}
            link={"/products"}
            btnText={"Add Product"}
            style={{ height: "auto", padding: "5rem 0" }}
          />
        ) : (
          <CartList cartItem={data?.carts} />
        )}
      </ProductContainer>
    </Container>
  );
};

export default OrderDetails;

const Container = styled.div`
  flex: 3;
  max-width: 100rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const ShippingContainer = styled.div`
  width: 100%;
`;
const PaymentContainer = styled.div`
  margin-bottom: 2rem;
  .payment_provider {
    img {
      width: 20rem;
      cursor: pointer;
      user-select: none;
      border-radius: 5px;
    }
  }
`;
const ProductContainer = styled.div``;
