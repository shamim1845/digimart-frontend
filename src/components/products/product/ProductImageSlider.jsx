import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductImageSlider = ({ productImages, sliderRef }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
  };
  return (
    <ProductImageSliderContainer>
      <SliderContainer>
        <Slider ref={sliderRef} {...settings}>
          {productImages.map((img) => {
            return (
              <div key={img._id} className="img_box">
                <img src={img.url} alt="product" />
              </div>
            );
          })}
        </Slider>
      </SliderContainer>

      <ThumbnailContainer>
        {productImages.map((img, index) => {
          return (
            <img
              onMouseOver={() => sliderRef.current.slickGoTo(index)}
              key={img._id}
              src={img.url}
              alt="product"
            />
          );
        })}
      </ThumbnailContainer>
    </ProductImageSliderContainer>
  );
};

export default ProductImageSlider;

const ProductImageSliderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  max-width: 45rem;
  background-color: transparent;
  position: relative;
  padding: 0 4rem 5rem;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
  .slick-slider {
    /* tap-highlight-color: none; */
  }
  .slick-next::before,
  .slick-prev::before {
    color: #5a5858;
  }

  .img_box {
    display: flex;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 4rem;
  padding-bottom: 5rem;
  overflow-y: auto;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    position: relative;
    flex-direction: row;
    padding-top: 3rem;
    padding-bottom: 0;
  }

  img {
    width: 7rem;
    margin: 0.5rem;
    padding: 0.5rem;
    border: 1px solid transparent;
    transition: all 0.3s ease-in-out;

    &:hover {
      border-color: tomato;
    }
  }
`;
