import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MUIButton from "../utils/reUseableComponents/MUIButton";
import Summary from "./Summary";
import { useGetMyCartListQuery } from "../../redux/api/cart/cartAPI";

const CartOrderSummary = () => {
  const navigate = useNavigate();

  const { data } = useGetMyCartListQuery();

  const orderHandler = () => {
    navigate("/order");
  };

  return (
    <Container>
      <Summary variant="h2" title={"Cart Summary"} />

      <MUIButton onClick={orderHandler} variant="contained">
        PROCEED TO CHECKOUT ({data?.carts?.length})
      </MUIButton>
    </Container>
  );
};

export default CartOrderSummary;

const Container = styled.div`
  max-width: 35rem;
`;
