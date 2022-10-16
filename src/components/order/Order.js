import React from 'react';
import styled from 'styled-components';

import PageContainer from "../utils/PageContainer";
import OrderSummary from './OrderSummary';
import OrderDetails from './OrderDetails';




const Cart = () => {



  return (
    <PageContainer>

   <OrderContainer>
  <OrderDetails/>
  <OrderSummary />
  </OrderContainer>
  
    </PageContainer>
  )
};

export default Cart;



const OrderContainer = styled.div`
width: 100%;
max-width: 1440px;
background: transparent;
display: flex;
justify-content: space-between;
margin: 1rem 0;
/* position: relative; */

@media screen and (max-width: 1440px) {
  padding: 0 1rem;
}
@media screen and (max-width: 768px) {
  flex-direction: column;
}
`
