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
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
  };
  const AddToCart = btn(Button)({
    backgroundColor: "tomato",
    color: "#fff",
    fontSize: "1.4rem",
    padding: "1rem 3rem",
    "&:hover": {
      backgroundColor: "#A9333A",
    },
  });

  return (
    <>
      <SliderContainer>
        <Slider {...settings}>
          {sliderData?.map((slide, index) => (
            <CarousleItems key={index} imgUrl={slide.image}>
              <div className="slider">
                <div className="slider_info">
                  <h3>{slide.heading}</h3>
                  <p>{slide.desc}</p>
                  <hr />
                  <Link to="/products">
                    <AddToCart variant="contained">Shop Now</AddToCart>
                  </Link>
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
  max-width: calc(1440px + 6rem);

  background-color: transparent;
  padding: 0 5rem 5rem;

  ul li button {
    &::before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button::before {
    color: #fff;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }

  @media screen and (min-width: 576px) {
    padding: 0 3rem 3rem;
  }
  @media screen and (max-width: 576px) {
    padding: 0;
    max-width: 100%;
  }
`;

const CarousleItems = styled.div`
  height: 55vh;
  @media screen and (max-width: 769px) {
    height: 40rem;
  }
  @media screen and (max-width: 576px) {
    height: 30rem;
  }

  .slider {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: ${(props) => `url(${props.imgUrl})`};
    background-repeat: no-repeat;
    background-size: 100% 100%;
    object-fit: contain;

    .slider_info {
      height: 20rem;
      width: 70vw;
      max-width: 60rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      background: rgba(0, 0, 0, 0.432);

      @media screen and (max-width: 576px) {
        height: 17rem;
      }
      h3 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1.2rem;
      }

      hr {
        background: #fff;
        width: 20rem;
        height: 0.3rem;
      }
    }
  }
`;
