import React from "react";
import styled from "styled-components";

const OrderedPaymentInfo = ({ paymentInfo }) => {
  // console.log(paymentInfo);

  return (
    <OrderedPaymentInfoContainer>
      <Title>
        <h2>Payment Information</h2>
      </Title>
      <PaymentDetails>
        <div className="infoGroup">
          <p>
            Payment Status : <span>{paymentInfo?.status}</span>
          </p>
        </div>
        <div className="infoGroup">
          <p>
            Paid-At :
            <span>
              {paymentInfo && new Date(paymentInfo?.paidAt).toDateString()}
            </span>
            <span>
              {paymentInfo &&
                new Date(paymentInfo?.paidAt).toLocaleTimeString()}
            </span>
          </p>
        </div>
        <div className="infoGroup">
          <p>
            Product price : <span>${paymentInfo?.itemsPrice}</span>
          </p>
        </div>
        <div className="infoGroup">
          <p>
            Shipping Cost : <span>${paymentInfo?.shippingPrice}</span>
          </p>
        </div>
        <div className="infoGroup">
          <p>
            Tax : <span>${paymentInfo?.taxPrice}</span>
          </p>
        </div>
        <div className="infoGroup">
          <p>
            Total payment : <span>${paymentInfo?.totalPrice}</span>
          </p>
        </div>
      </PaymentDetails>
    </OrderedPaymentInfoContainer>
  );
};

export default OrderedPaymentInfo;

const OrderedPaymentInfoContainer = styled.div`
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 100%;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    /* width: 90vw; */
  }
`;
const Title = styled.div`
  background: #fafafa;
  color: #212121;
  min-height: 5rem;
  display: grid;
  align-items: center;
  padding: 0 1rem;

  h2 {
    font-weight: 500;
    font-family: roboto;
    font-size: 1.6rem;

    span {
      font-weight: 500;
      font-family: roboto;
      font-size: 1.6rem;
      text-transform: capitalize;
    }
  }
`;
const PaymentDetails = styled.div`
  padding: 1rem 0;
  .infoGroup {
    padding: 0rem 1rem;
    p {
      font-size: 1.3rem;
      display: flex;

      span {
        color: teal;
        margin: 0 1rem;
      }
    }
  }
`;
