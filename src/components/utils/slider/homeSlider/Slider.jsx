import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { sliderData } from "./sliderData";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { styled as btn } from "@mui/material/styles";

const Carousle = () => {
  // slider setting
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
  };

  // MUI custom Btn
  const ShopNowBtn = btn(Button)({
    backgroundColor: "tomato",
    color: "#0f1111",
    fontSize: "1.4rem",
    fontWeight: "600",
    padding: "1rem 3rem",

    "&:hover": {
      backgroundColor: "#585555",
      color: "#fff",
    },
  });

  return (
    <>
      <SliderContainer>
        <Slider {...settings}>
          {sliderData?.map((slide, index) => (
            <CarousleItems key={index}>
              <div className="slider">
                <div className="slider_info">
                  <h1>{slide.heading}</h1>
                  <h3>{slide.desc}</h3>
                  <br />
                  <Link style={{ marginTop: "2rem" }} to="/products">
                    <ShopNowBtn variant="contained">Shop Now</ShopNowBtn>
                  </Link>
                </div>
                <div className="slider_image">
                  <img src={slide.image} alt={slide.heading} />
                </div>
              </div>
            </CarousleItems>
          ))}
        </Slider>
      </SliderContainer>
    </>
  );
};

export default Carousle;

const SliderContainer = styled.div`
  width: 100%;
  max-width: 1440px;

  /* slider default style modify */
  .slick-arrow.slick-prev {
    background-color: transparent;
  }
  .slick-arrow.slick-prev::before,
  .slick-arrow.slick-next::before {
    color: #5a5858;
  }
  .slick-dots li button {
    &::before {
      font-size: 10px;
      color: #5a5858;
    }
  }
  ul li.slick-active button::before {
    color: tomato;
  }
  .slick-list {
    /* overflow: hidden; */
  }
  button {
    z-index: 1;
  }

  @media screen and (min-width: 769px) {
    padding: 0 3rem 3rem;
  }
  @media screen and (max-width: 576px) {
    padding: 0;
    max-width: 100%;
  }
`;

const CarousleItems = styled.div`
  height: 100%;
  padding: 10rem 0;
  @media screen and (max-width: 769px) {
    padding: 5rem 0;
  }

  .slider {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100% !important;

    @media screen and (max-width: 769px) {
      flex-direction: column-reverse;
    }
    @media screen and (max-width: 576px) {
    }

    .slider_info {
      width: 40%;
      height: 100%;
      display: flex;
      gap: 1rem;
      flex-direction: column;
      justify-content: center;
      padding-left: 5rem;

      @media screen and (max-width: 769px) {
        align-items: center;
        padding-left: 0rem;
        padding-top: 2rem;
        width: 100%;
        max-height: 20rem;
      }

      @media screen and (max-width: 576px) {
        display: none;
      }
      h1 {
        font-size: 4rem;
        font-weight: 600;

        color: var(--text-primary);

        @media screen and (max-width: 769px) {
          font-size: 3rem;
        }
      }
      h3 {
        font-size: 2rem;
        color: var(--text-primary);
        font-weight: 500;

        @media screen and (max-width: 769px) {
          font-size: 1.7rem;
        }
      }
    }
    .slider_image {
      width: 60%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      @media screen and (max-width: 769px) {
        width: 100%;
      }

      img {
        width: 100%;
        max-width: 60rem;
        object-fit: cover;
        padding: 0 1rem;

        @media screen and (max-width: 769px) {
          max-width: 50rem;
        }
      }
    }
  }
`;
