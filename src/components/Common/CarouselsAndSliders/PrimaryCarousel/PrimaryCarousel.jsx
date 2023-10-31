import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import leftArrowImg from "./../../../../assets/imgs/leftArrow.png";
import rightArrowImg from "./../../../../assets/imgs/rightArrow.png";

const PRIMARY_PRODS_CAROUSEL = styled.article`
  margin-bottom: 20px;
  box-sizing: border-box;
  padding-inline: 2.5rem;
  // pi 40px
  width: 100%;
  min-height: 17.5rem;
  // h 280px
  background-color: #ffffff;
  transform: translateY(-25.5%);
  @media screen and (max-width: 495px) {
    padding-inline: unset;
  }

  h3 {
    color: #0f1111;
    margin-block: 0;
    padding-top: 1.125rem;
    // 18px
    @media screen and (max-width: 495px) {
      padding-left: 14px;  
    }
  }

  .slick-slider {
    width: 100%;
    height: 86%;
    transform: translateY(5%);
  }
  .slick-slider,
  .slick-initialized {
    width: 100%;
  }
  .slick-track {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 21px;
  }
  .slick-slide {
    width: 240px !important;
  }
`;

const LeftArrowContainer = styled.div`
  background-image: url(${leftArrowImg});
  background-size: 59%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #ffffff;
  height: 6.25rem;
  // h 100px
  width: 2.813rem;
  // w 45px
  position: absolute;
  top: 49%;
  left: 0;
  transform: translateY(-50%);
  z-index: 99;
  cursor: pointer;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 2px 0px 0px 1px rgba(0, 0, 0, 0.3);
  opacity: 85%;
  transition: 0.4s ease-in-out;
  &:hover {
    opacity: 100%;
  }
  /* @media screen and (max-width: 495px) {
    left: 0;
  } */
`;

const RightArrowContainer = styled.div`
  background-image: url(${rightArrowImg});
  background-size: 59%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #ffffff;
  height: 6.25rem;
  // h 100px
  width: 2.813rem;
  // w 45px
  position: absolute;
  top: 49%;
  right: 0;
  transform: translateY(-50%);
  z-index: 99;
  cursor: pointer;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  box-shadow: -2px 0px 0px 1px rgba(0, 0, 0, 0.3);
  opacity: 85%;
  transition: 0.4s ease-in-out;
  &:hover {
    opacity: 100%;
  }
  /* @media screen and (max-width: 495px) {
    right: 0;
  } */
`;

const CustomPrevArrow = ({ onClick }) => (
  <LeftArrowContainer onClick={onClick}>
  </LeftArrowContainer>
);

const CustomNextArrow = ({ onClick }) => (
  <RightArrowContainer onClick={onClick}>
  </RightArrowContainer>
);

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 2,
  autoplay: false,
  cssEase: "linear",
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
};

const responsiveSettings = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 980,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 390,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
];

const Image = styled.img`
  width: 176px;
  height: 180px;
`;
export default function Carousel(props) {
  return (
    <PRIMARY_PRODS_CAROUSEL>
      <h3>{props.title}</h3>
      <Slider {...settings} responsive={responsiveSettings}>
        {props.data.map((item, i) => (
          <Link to={`/productPage/${item.id}/`} key={item.id}>
            <LazyLoad>
              <Image src={item.images[0]} alt={item.name} />
            </LazyLoad>
          </Link>
        ))}
      </Slider>
    </PRIMARY_PRODS_CAROUSEL>
  );
}
