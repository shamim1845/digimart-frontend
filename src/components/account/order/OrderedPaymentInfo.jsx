import React from "react";
import styled from "styled-components";
import Title from "../../utils/reUseableComponents/Title";
import { currencyConstants } from "../../utils/constants/currencyConstants";

const OrderedPaymentInfo = ({ paymentInfo }) => {
  // find selected currency
  const selectedCurrency = currencyConstants.find(
    (currCurrency) => currCurrency.name === paymentInfo?.currency
  );

  return (
    <Container>
      <Title
        variant="h3"
        text={"Payment Information"}
        style={{
          background: "#fafafa",
          padding: "1.5rem",
          fontWeight: "500",
        }}
      />

      <Content>
        <div className="infoGroup">
          <div>Payment Id :</div>
          <div>{paymentInfo?.id}</div>
        </div>

        <div className="infoGroup">
          <div>Payment Status :</div>
          <div>{paymentInfo?.status}</div>
        </div>

        <div className="infoGroup">
          <div>Provider :</div>
          <div>{paymentInfo?.provider}</div>
        </div>

        <div className="infoGroup">
          <div>Paid-At :</div>
          <div style={{ display: "flex", gap: "5rem" }}>
            <span>
              {paymentInfo && new Date(paymentInfo?.paidAt).toDateString()}
            </span>
            <span>
              {paymentInfo &&
                new Date(paymentInfo?.paidAt).toLocaleTimeString()}
            </span>
          </div>
        </div>

        <div className="infoGroup">
          <div>Product price :</div>
          <div>
            <span>{selectedCurrency.icon}</span>
            <span>{paymentInfo?.itemsPrice}</span>
          </div>
        </div>

        <div className="infoGroup">
          <div>Shipping Cost :</div>
          <div>
            <span>{selectedCurrency.icon}</span>
            <span>{paymentInfo?.shippingPrice}</span>
          </div>
        </div>

        <div className="infoGroup">
          <div>Tax :</div>
          <div>
            <span>{selectedCurrency.icon}</span>
            <span>{paymentInfo?.taxPrice}</span>
          </div>
        </div>

        <div className="infoGroup">
          <div>Total payment :</div>
          <div>
            <span>{selectedCurrency.icon}</span>
            <span>{paymentInfo?.totalPrice}</span>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default OrderedPaymentInfo;

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
