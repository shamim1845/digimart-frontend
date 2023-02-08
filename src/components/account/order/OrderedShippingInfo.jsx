import React from "react";
import styled from "styled-components";

const OrderedShippingInfo = ({ shippingInfo }) => {
  // console.log(shippingInfo);

  return (
    <OrderedShippingInfoContainer>
      <Title>
        <h2>Shipping Information</h2>
      </Title>
      <PaymentDetails>
        <div className="infoGroup">
          <p>
            Country : <span>${shippingInfo?.country}</span>
          </p>
        </div>
        <div className="infoGroup">
          <p>
            State: <span>${shippingInfo?.state}</span>
          </p>
        </div>
        <div className="infoGroup">
          <p>
            City :<span>{shippingInfo?.city}</span>
          </p>
        </div>
        <div className="infoGroup">
          <p>
            Address : <span>{shippingInfo?.address}</span>
          </p>
        </div>

        <div className="infoGroup">
          <p>
            Post Code : <span>${shippingInfo?.postCode}</span>
          </p>
        </div>

        <div className="infoGroup">
          <p>
            Phone No : <span>${shippingInfo?.phoneNo}</span>
          </p>
        </div>
      </PaymentDetails>
    </OrderedShippingInfoContainer>
  );
};

export default OrderedShippingInfo;

const OrderedShippingInfoContainer = styled.div`
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
