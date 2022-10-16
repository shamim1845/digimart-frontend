import React, {useEffect} from 'react';
import styled from "styled-components"
import Carousle from "./Slider";
import {useDispatch} from "react-redux";

import { fetchAsyncProducts } from '../../features/products/productSlice';
  
import CategoriesDisplay from './CategoriesDisplay';
import FeaturedProducts from './FeaturedProducts';
import PageContainer from '../utils/PageContainer';



const Home = () => {
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchAsyncProducts(1))
  }, [dispatch])

  return (
    <>
    <PageContainer>
    {/* <Metadata title="DIGIMART | Find any thing what do you want?"/> */}
    <CaruusleContainer>
        <Carousle />
    </CaruusleContainer>

    <CategoriesDisplay />
    <FeaturedProducts />
     </PageContainer>
       
    </>
  )
}

export default Home;


const CaruusleContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
overflow: hidden;
background-color: #666;
@media screen and (max-width:1440px) {

  }
`
