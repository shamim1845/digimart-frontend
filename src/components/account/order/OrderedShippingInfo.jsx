import React from "react";
import styled from "styled-components";
import Title from "../../utils/reUseableComponents/Title";

const OrderedShippingInfo = ({ shippingInfo }) => {
  // console.log(shippingInfo);

  return (
    <Container>
      <Title
        variant="h3"
        text={"Shipping Information"}
        style={{
          background: "#fafafa",
          padding: "1.5rem",
          fontWeight: "500",
        }}
      />

      <Content>
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
      </Content>
    </Container>
  );
};

export default OrderedShippingInfo;

const Container = styled.div`
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  width: 100%;
  margin-top: 1rem;
  box-shadow: var(--shadow-1);
`;

const Content = styled.div`
  padding: 1.5rem;

  .infoGroup {
    margin-bottom: 1rem;
    color: var(--text-primary);
    p {
      font-size: 1.3rem;
      display: flex;

      span {
        margin: 0 1rem;
        color: tomato;
      }
    }
  }
`;
