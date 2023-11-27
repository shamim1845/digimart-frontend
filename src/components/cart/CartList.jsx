import styled from "styled-components";
import CartProductCard from "./CartProductCard";

const CartList = ({ cartItem }) => {
  return (
    <Container>
      {cartItem &&
        cartItem.map((item) => {
          return (
            <CartProductCard
              key={item?.product?._id}
              product={item.product}
              quantity={item.quantity}
            />
          );
        })}
    </Container>
  );
};

export default CartList;

const Container = styled.div`
  flex: 3;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
