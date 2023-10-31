import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import leftArrowImg from "./../../../../assets/imgs/leftArrow.png";
import rightArrowImg from "./../../../../assets/imgs/rightArrow.png";

const DEALS_MAIN = styled.section`
  width: 100%;
  min-height: 17.5rem;
  // h 280px
  background-color: #ffffff;
  transform: translateY(-11%);

  .deals-box {
    a {
      text-decoration: none;
    }
  }

  h3 {
    display: inline-block;
    color: #0f1111;
    padding-inline: 1.5rem;
  }

  #deals-heading {
    font-size: 14px;
    text-decoration: none;
    color: #007185;
    font-size: 14px;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
      color: #c7511f;
    }
  }

  .slick-slider,
  .slick-initialized {
    width: 100%;
  }

  .slick-track {
    display: flex;
    align-items: center;
    gap: 21px;
  }

  .slick-slide {
    min-width: 240px !important;
  }
  .img-wrapper {
    width: 100%;
    height: 200px;
    background-color: #f7f8f8;
    & figure {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      & .lazyload-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    & img {
      max-height: 184px;
      max-width: 95%;
      mix-blend-mode: multiply;
    }
  }

  .deal-percent {
    width: 100%;
    height: auto;
    margin-block: 6px;
    span {
      background-color: #cc0c39;
      color: #ffffff;
      font-size: 13px;
      padding: 4px 6px;
      &::after {
        content: "off";
        padding-left: 4px;
      }
    }
    h5 {
      display: inline-block;
      padding-left: 5px;
      color: #cc0c39;
      font-size: 12px;
      margin: 0;
    }
  }
  .deal-specs {
    color: #0f1111;
    #deal-currency {
      font-weight: 600;
      font-size: 12px;
      position: relative;
      top: -0.3rem;
    }
    #new-price {
      display: block;
      font-weight: 600;
      font-size: 21px;
      padding-right: 5px;
      &::before {
        content: "$";
        font-size: 12px;
        position: relative;
        top: -0.3rem;
      }
    }
    #list-price-txt {
      font-size: 13px;
      padding-right: 3px;
    }
    #list-price-currency {
      font-size: 13px;
      text-decoration: line-through;
    }
    #list-price-num {
      font-size: 13px;
      text-decoration: line-through;
    }
    #deal-item-title {
      display: block;
      font-size: 14px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
`;

const LeftArrowContainer = styled.div`
  background-image: url(${leftArrowImg});
  background-size: 59%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 85%;
  transition: 0.4s ease-in-out;
  background-color: #ffffff;
  height: 6.25rem;
  // h 100px
  width: 2.813rem;
  // w 45px
  position: absolute;
  top: 34%;
  left: 0;
  // l -20px
  transform: translateY(-50%);
  z-index: 99;
  cursor: pointer;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 2px 0px 0px 1px rgba(0, 0, 0, 0.3);
  transition: 0.4s ease-in-out;
  &:hover {
    opacity: 100%;
  }
`;

const RightArrowContainer = styled.div`
  background-image: url(${rightArrowImg});
  background-size: 59%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 85%;
  transition: 0.4s ease-in-out;
  background-color: #ffffff;
  height: 6.25rem;
  // h 100px
  width: 2.813rem;
  // w 45px
  position: absolute;
  top: 34%;
  right: 0;
  /* r -20px */
  transform: translateY(-50%);
  z-index: 99;
  cursor: pointer;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  box-shadow: -2px 0px 0px 1px rgba(0, 0, 0, 0.3);
  transition: 0.4s ease-in-out;
  &:hover {
    opacity: 100%;
  }
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
  slidesToShow: 5,
  slidesToScroll: 2,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
};

const responsiveSettings = [
  {
    breakpoint: 920,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];

export default function DealsCarousel(props) {
  return (
    <DEALS_MAIN>
      <h3>{props.title}</h3>
      <a id="deals-heading" href=".">
        See more
      </a>
      <Slider {...settings} responsive={responsiveSettings}>
        {props.data.map((item) => {
          const percentageOff = Math.round(
            ((item.oldPrice - item.newPrice) / item.oldPrice) * 100
          );

          return (
            <article className="deals-box" key={item.id}>
                        <Link to={`/productPage/${item.id}/`} key={item.id}>
                <div className="img-wrapper">
                  <figure>
                    <LazyLoad>
                      <img src={item.image} alt="" />
                    </LazyLoad>
                  </figure>
                </div>
                <div className="deal-percent">
                  <span>{percentageOff}%</span>
                  <h5>Deal</h5>
                </div>
                <div className="deal-specs">
                  <span id="new-price">{item.newPrice}</span>
                  <span id="list-price-txt">List Price:</span>
                  <span id="list-price-currency">$</span>
                  <span id="list-price-num">{item.oldPrice}</span>
                  <span id="deal-item-title">{item.name}</span>
                </div>
              </Link>
            </article>
          );
        })}
      </Slider>
    </DEALS_MAIN>
  );
}
