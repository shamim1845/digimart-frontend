import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import PageContainer from "../../utils/PageContainer";
import Loading from "../../utils/fetchUtils/Loading";
import ProductDescription from "./ProductDescription";
import RatingReviews from "./RatingReviews";
import RelatedProducts from "./RelatedProducts";
import ProductImageSlider from "./ProductImageSlider";
import ProductHandler from "./ProductHandler";
import { useGetProductQuery } from "../../../redux/api/products/productsAPI";
import Error from "../../utils/fetchUtils/Error";

const ProductDetails = () => {
  const [favourite, setFavourite] = useState(false);

  const sliderRef = useRef();
  const dispatch = useDispatch();

  const { productId } = useParams();
  const { data, isLoading, isError } = useGetProductQuery(productId);
  console.log(data);

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
  }, [dispatch, productId]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return Error;
  }

  return (
    <PageContainer>
      <ProductDetailsContainer>
        <ContainerTop>
          <SliderContainer>
            <ProductImageSlider
              productImages={data?.product?.images}
              sliderRef={sliderRef}
            />
          </SliderContainer>
          <DetailsContainer>
            <ProductHandler
              product={data?.product}
              favourite={favourite}
              setFavourite={setFavourite}
            />
          </DetailsContainer>
        </ContainerTop>

        <ProductDescription product={data.product} />
        <RatingReviews product={data.product} />
        <RelatedProducts category={data.product.category} id={productId} />
      </ProductDetailsContainer>
    </PageContainer>
  );
};

export default ProductDetails;

const ProductDetailsContainer = styled.div`
  width: 100%;
  max-width: 1440px;
`;
const ContainerTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 7rem;
  padding: 2rem 0 3rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const SliderContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
`;
