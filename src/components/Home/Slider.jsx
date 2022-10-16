import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components';

const Carousle = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true
    };
    return (
        <>
            <SliderContent>
                <Slider {...settings}>
                    <CarousleItems>
                        <div>
                            <img src="images/slider/slider-badag.jpg" alt="" />
                        </div>
                    </CarousleItems>
                    <CarousleItems>
                        <div>
                            <img src="images/slider/slider-badging.jpg" alt="" />
                        </div>
                    </CarousleItems>
                    <CarousleItems>
                        <div>
                            <img src="images/slider/slider-scale.jpg" alt="" />
                        </div>
                    </CarousleItems>
                    <CarousleItems>
                        <div>
                            <img src="images/slider/slider-scales.jpg" alt="" />
                        </div>
                    </CarousleItems>


                </Slider>
            </SliderContent>
        </>
    )
}

export default Carousle;



const SliderContent = styled.div`
width: 100%;
    max-width: calc(1440px + 7rem);
 background-color: transparent;
 padding: 0 5rem 5rem;

 ul li button {
        &::before{
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }
    li.slick-active button::before {
        color: #fff;
    }
    .slick-list{
        overflow: visible;
    }
    button{
        z-index: 1;
    }

 @media screen and (min-width:576px){
    padding: 0 3rem 3rem ;
 
 }
 @media screen and (max-width:576px){
    padding: 0 ;
    max-width: 100%;
 }
   
`


const CarousleItems = styled.div`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;


    img{
        width: 100%;
        height:100%;
        object-fit: cover;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
     
    }

`
