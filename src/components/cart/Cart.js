import React from 'react';
import styled from 'styled-components';
import CartDetails from './CartDetails';
import CartOrderSummary from './CartOrderSummary';
import PageContainer from "../utils/PageContainer";
import { useSelector } from 'react-redux';
import { getCartItems } from '../../features/products/productSlice';



const Cart = () => {
  const cartItem = useSelector(getCartItems);


  return (
    <PageContainer>

   <CartContainer>
  <CartDetails cartItem={cartItem}/>
  <CartOrderSummary />
  </CartContainer>
  
    </PageContainer>
  )
};

export default Cart;



const CartContainer = styled.div`
width: 100%;
max-width: 1440px;
background: transparent;
display: flex;
justify-content: space-between;
margin: 1rem 0;

@media screen and (max-width: 1440px) {
  padding: 0 1rem;
}
@media screen and (max-width: 768px) {
 flex-direction: column;

}
`
