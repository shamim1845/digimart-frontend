import React from 'react';
import styled from 'styled-components';
import PageContainer from "../utils/PageContainer";
import { useSelector } from 'react-redux';
import {getFavouriteItems } from '../../features/products/productSlice';
import FavouriteDetails from './FavouriteDetails';



const Favourite = () => {
  const FavtItem = useSelector(getFavouriteItems);


  return (
    <PageContainer>

   <CartContainer>
  <FavouriteDetails cartItem={FavtItem}/>

  </CartContainer>
  
    </PageContainer>
  )
};

export default Favourite;



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
`
