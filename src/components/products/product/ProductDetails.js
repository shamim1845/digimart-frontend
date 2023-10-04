import React, { useRef } from "react";
import { useParams } from "react-router-dom";
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
import NotFound from "../../utils/fetchUtils/NotFound";

const ProductDetails = () => {
  const sliderRef = useRef();

  const { productId } = useParams();
  const { data, isLoading, isError, error } = useGetProductQuery(productId);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    if (error.status === 404) {
      return (
        <NotFound
          text={error?.data?.message}
          style={{
            height: "20rem",
            padding: "5rem 0",
            textAlign: "center",
            justifyContent: "center",
          }}
        />
      );
    }
    return (
      <Error
        text={error?.data?.message}
        style={{
          height: "20rem",
          padding: "5rem 0",
          textAlign: "center",
          justifyContent: "center",
        }}
      />
    );
  }

  return (
    <PageContainer>
      <Container>
        <ContainerTop>
          <SliderContainer>
            <ProductImageSlider
              productImages={data?.product?.images}
              sliderRef={sliderRef}
            />
          </SliderContainer>
          <HandlerContainer>
            <ProductHandler product={data?.product} />
          </HandlerContainer>
        </ContainerTop>

        <ProductDescription product={data.product} />
        <RatingReviews product={data.product} />
        <RelatedProducts
          category={
            data?.product?.categories[data?.product?.categories?.length - 1]
              .category_slug
          }
          id={productId}
        />
      </Container>
    </PageContainer>
  );
};

export default ProductDetails;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContainerTop = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 2rem 0;
  margin-bottom: 5rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
  @media screen and (max-width: 576px) {
    padding: 0;
  }
`;
const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const HandlerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
