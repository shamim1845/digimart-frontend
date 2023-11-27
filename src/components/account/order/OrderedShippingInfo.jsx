import React from "react";
import styled from "styled-components";
import Title from "../../utils/reUseableComponents/Title";

const OrderedShippingInfo = ({ shippingInfo }) => {
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
          <span>Country :</span>
          <span>{shippingInfo?.country}</span>
        </div>
        <div className="infoGroup">
          <span>State:</span>
          <span>{shippingInfo?.state}</span>
        </div>
        <div className="infoGroup">
          <span>City :</span>
          <span>{shippingInfo?.city}</span>
        </div>
        <div className="infoGroup">
          <span>Address :</span>
          <span>{shippingInfo?.address}</span>
        </div>

        <div className="infoGroup">
          <span>Post Code :</span>
          <span>{shippingInfo?.postCode}</span>
        </div>

        <div className="infoGroup">
          <span>Phone No :</span>
          <span>{shippingInfo?.phoneNo}</span>
        </div>
      </Content>
    </Container>
  );
};

export default OrderedShippingInfo;

const Container = styled.div`
  box-shadow: var(--shadow-3);
  border-radius: 0.5rem;
  padding: 2rem;
`;

const Content = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .infoGroup {
    display: flex;
    gap: 1rem;
    color: var(--text-primary);
  }
`;
