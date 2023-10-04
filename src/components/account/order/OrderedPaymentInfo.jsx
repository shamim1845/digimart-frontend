import React from "react";
import styled from "styled-components";
import Title from "../../utils/reUseableComponents/Title";

const OrderedPaymentInfo = ({ paymentInfo }) => {
  // console.log(paymentInfo);

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
      </Content>
    </Container>
  );
};

export default OrderedPaymentInfo;

const Container = styled.div`
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  width: 100%;
  margin-top: 1rem;
  box-shadow: var(--shadow-1);
`;

//   background: #fafafa;
//   color: #212121;
//   min-height: 5rem;
//   display: grid;
//   align-items: center;
//   padding: 0 1rem;

//   h2 {
//     font-weight: 500;
//     font-size: 1.6rem;

//     span {
//       font-weight: 500;
//       font-size: 1.6rem;
//       text-transform: capitalize;
//     }
//   }
// `;
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
