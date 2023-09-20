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
              onClick={() => sliderRef.current.slickGoTo(index)}
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
  width: 100vw;
  max-width: 40rem;
  background-color: transparent;
  position: relative;

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
  overflow-y: auto;
  white-space: nowrap;

  @media screen and (max-width: 1024px) {
    position: absolute;
    left: 10vw;
  }

  @media screen and (max-width: 768px) {
    position: relative;
    left: 0;
    flex-direction: row;
    margin-top: 3rem;
  }

  img {
    width: 7rem;
    margin: 0.5rem;
    padding: 0.5rem;
    border: 1px solid transparent;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      border-color: tomato;
    }
  }
`;
