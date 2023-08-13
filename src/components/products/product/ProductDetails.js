import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import PageContainer from "../../utils/PageContainer";
import Loading from "../../utils/Loading";
import ProductDescription from "./ProductDescription";
import RatingReviews from "./RatingReviews";
import RelatedProducts from "./RelatedProducts";

import ProductImageSlider from "./ProductImageSlider";
import ProductHandler from "./ProductHandler";
import { fetchAsyncProductsDetails } from "../../../features/products/productSlice";

const ProductDetails = () => {
  const sliderRef = useRef();
  const dispatch = useDispatch();
  const [favourite, setFavourite] = useState(false);

  const { productId } = useParams();

  const { Product } = useSelector((state) => state.products.singleProduct);
  useEffect(() => {
    setFavourite(false);

    function localFavouriteItem() {
      const favItems = JSON.parse(localStorage.getItem("favourite-item"));
      favItems &&
        favItems.find((item) => {
          if (item.product._id === productId) {
            setFavourite(true);
          }
          return null;
        });
    }
    localFavouriteItem();
    dispatch(fetchAsyncProductsDetails(productId));
  }, [dispatch, productId]);

  if (!Product) {
    return <Loading />;
  }

  return (
    <PageContainer>
      <ProductDetailsContainer>
        <ContainerTop>
          <SliderContainer>
            <ProductImageSlider Product={Product} sliderRef={sliderRef} />
          </SliderContainer>
          <DetailsContainer>
            <ProductHandler
              Product={Product}
              favourite={favourite}
              setFavourite={setFavourite}
            />
          </DetailsContainer>
        </ContainerTop>
        <ProductDescription product={Product} />
        <RatingReviews product={Product} />
        <RelatedProducts category={Product.category} id={productId} />
      </ProductDetailsContainer>
    </PageContainer>
  );
};

export default ProductDetails;

const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1440px;
  margin-top: 2rem;

  @media screen and (max-width: 1440px) {
    padding: 0 2rem;
  }
`;
const ContainerTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;
const SliderContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const DetailsContainer = styled.div`
  margin-left: 5rem;
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    margin-left: 0rem;
  }
`;
