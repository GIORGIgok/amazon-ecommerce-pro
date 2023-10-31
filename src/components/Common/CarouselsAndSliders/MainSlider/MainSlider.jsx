import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import gaming from "../../../../assets/imgs/mainSlider/gaming.jpg";
import beauty_prods from "../../../../assets/imgs/mainSlider/beautyProds.jpg";
import hispanic_goods from "../../../../assets/imgs/mainSlider/hispanicGoods.jpg";
import school_supplies from "../../../../assets/imgs/mainSlider/schoolSupplies.jpg";
import shop_books from "../../../../assets/imgs/mainSlider/shopBooks.jpg";
import prime_exclusive from "../../../../assets/imgs/mainSlider/primeExclusive.jpg";
import holiday_gifts from "../../../../assets/imgs/mainSlider/holidayGifts.jpg";

const MAIN_CAROUSEL_CONTAINER = styled.article`
  height: 21.25rem;
  /* 340px */
  background: rgb(227, 230, 230);
  background: -moz-linear-gradient(
    0deg,
    rgba(227, 230, 230, 1) 55%,
    rgba(232, 232, 232, 1) 90%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(227, 230, 230, 1) 55%,
    rgba(232, 232, 232, 1) 90%
  );
  background: linear-gradient(
    0deg,
    rgba(227, 230, 230, 1) 55%,
    rgba(232, 232, 232, 1) 90%
  );
  mask-image: linear-gradient(to bottom, black 59%, transparent 115%);
  -webkit-mask-image: linear-gradient(to bottom, black 59%, transparent 115%);

  .slick-slider {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
    .slick-slider {
      height: auto;
    }
    height: 15rem;
    /* 240px */
    mask-image: linear-gradient(to bottom, black 37%, transparent 115%);
    -webkit-mask-image: linear-gradient(to bottom, black 37%, transparent 115%);
  }
  @media (max-width: 374px) {
    height: 13.45rem;
  }
  @media (max-width: 322px) {
    height: 13.125rem;

  }
  @media (max-width: 315px) {
    height: 12.725rem;

  }
`;

const LeftArrowContainer = styled.div`
  height: 6.875rem;
  width: 4.375rem;
  padding-bottom: 2.813rem;
  position: absolute;
  top: 34%;
  left: 1.5rem;
  transform: translateY(-50%);
  z-index: 99;
  cursor: pointer;
  @media (min-width: 576px) and (max-width: 768px) {
    top: 26%;
    left: 1rem;
  }
  @media (max-width: 576px) {
    top: 42%;
    left: 0.4rem;
  }
`;

const RightArrowContainer = styled.div`
  height: 6.875rem;
  width: auto;
  padding-bottom: 2.813rem;
  padding-left: 2.438rem;
  position: absolute;
  top: 34%;
  right: 1.5rem;
  transform: translateY(-50%);
  z-index: 99;
  cursor: pointer;
  @media (min-width: 576px) and (max-width: 768px) {
    top: 26%;
    right: 1rem;
  }
  @media (max-width: 576px) {
    top: 42%;
    right: 0.4rem;
  }
`;

const LeftArrow = styled.div`
  width: 100%;
  height: 100%;
  color: #000000;
  font-size: 6.25rem;
  font-weight: 200;
  position: relative;

  &::before {
    content: "‹";
    position: absolute;
    left: 0.125rem;
    z-index: -1;
    color: white;
  }
`;

const RightArrow = styled.div`
  width: 100%;
  height: 100%;
  color: #000000;
  font-size: 6.25rem;
  font-weight: 200;
  position: relative;

  &::before {
    content: "›";
    position: absolute;
    right: 0.125rem;
    z-index: -1;
    color: white;
  }
`;

const CustomPrevArrow = ({ onClick }) => (
  <LeftArrowContainer onClick={onClick}>
    <LeftArrow>{"‹"}</LeftArrow>
  </LeftArrowContainer>
);

const CustomNextArrow = ({ onClick }) => (
  <RightArrowContainer onClick={onClick}>
    <RightArrow>{"›"}</RightArrow>
  </RightArrowContainer>
);

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 200,
  autoplaySpeed: 4900,
  cssEase: "linear",
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
};

const images = [
  {
    src: holiday_gifts,
    link: "/",
  },
  {
    src: gaming,
    link: "/",
  },
  {
    src: shop_books,
    link: "/",
  },
  {
    src: school_supplies,
    link: "/",
  },
  {
    src: beauty_prods,
    link: "/",
  },
  {
    src: hispanic_goods,
    link: "/",
  },
  {
    src: prime_exclusive,
    link: "/",
  },
];

export default function MainCarousel() {
  return (
    <MAIN_CAROUSEL_CONTAINER>
      <Slider {...settings}>
        {images.map((image, i) => (
          <Link to={image.link} key={i}>
            <LazyLoad>
              <figure>
                <img
                  src={image.src}
                  alt="slider-category"
                  style={{ width: "100%" }}
                  loading="lazy"
                />
              </figure>
            </LazyLoad>
          </Link>
        ))}
      </Slider>
    </MAIN_CAROUSEL_CONTAINER>
  );
}
