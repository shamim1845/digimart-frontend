import styled from "styled-components";
import Summary from "../cart/Summary";

const OrderSummary = () => {
  return (
    <Container>
      <Summary title={"Order Summary"} />
    </Container>
  );
};

export default OrderSummary;

const Container = styled.div`
  max-width: 35rem;
  margin-top: 3.3rem;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;
