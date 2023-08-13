import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductImageSlider = ({ Product, sliderRef }) => {
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
          {Product.images.map((img) => {
            return (
              <div key={img._id} className="img_box">
                <img src={img.url} alt="" />
              </div>
            );
          })}
        </Slider>
      </SliderContainer>
      <br />

      <div className="img_thumbnail">
        {Product.images.map((img, index) => {
          return (
            <img
              onClick={() => sliderRef.current.slickGoTo(index)}
              key={img._id}
              src={img.url}
              alt=""
            />
          );
        })}
      </div>
    </ProductImageSliderContainer>
  );
};

export default ProductImageSlider;

const ProductImageSliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  .img_thumbnail {
    display: flex;
    flex-direction: column;
    margin-right: 4rem;
    overflow-y: auto;
    white-space: nowrap;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      flex-direction: row;
      margin: 2rem;
    }

    img {
      width: 5rem;
      margin: 0.5rem;
    }
  }
`;
const SliderContainer = styled.div`
  width: 35vw;
  background-color: transparent;

  .slick-next::before,
  .slick-prev::before {
    color: red;
  }

  @media screen and (max-width: 768px) {
    width: 85vw;
  }

  .img_box {
    img {
      width: 100%;
      height: 100%;
      max-height: 35rem;
    }
  }
`;
