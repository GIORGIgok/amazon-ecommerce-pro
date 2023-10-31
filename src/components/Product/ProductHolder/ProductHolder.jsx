// details about product \\
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactImageMagnify from "react-image-magnify";
import Location_Img from "../../../assets/imgs/location-dark.png";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../../features/products/productsSlice";
import { addToCart, getMyCartProducts } from "../../../features/cart/cartSlice";

// for desktops/tablets
const PRODUCT_HOLDER = styled.main`
  float: left;
  padding-top: 0.75rem;
  /* 12px */
  padding-bottom: 3.125rem;
  /* 50px */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .left-side {
    padding-left: 1.25rem;
    /* 20px */
    width: 37%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0.25rem;
    /* t 4px */
    left: 0;
    @media screen and (max-width: 768px) {
      width: 30%;
      padding: 4px;
    }
    & .sm-images {
      width: 30%;
      display: flex;
      flex-direction: column;
      gap: 0.438rem;
      /* 7px */
      & figure {
        width: 2.3rem;
        height: 2.3rem;
        @media screen and (max-width: 720px) {
          width: 1rem;
          height: 1rem;
        }
      }
      & img {
        width: 2.3rem;
        height: 2.3rem;
        max-width: 100%;
        border-radius: 18%;
        object-fit: contain;
        cursor: pointer;
        border: 1px solid #949494;
        @media screen and (max-width: 720px) {
          width: 1rem;
          height: 1rem;
        }
        &:hover {
          border: 1px solid #007185;
          outline: 3px solid #c8f3fa;
        }
        &.active {
          border: 1px solid #007185;
          outline: 3px solid #c8f3fa;
        }
      }
    }
    .main-image {
      float: right;
      margin-inline: 16px;
      @media screen and (max-width: 768px) {
        margin-inline: 8px;
      }
    }
  }
  .middle {
    width: 41%;
    height: 100%;
    @media screen and (max-width: 768px) {
      width: 40%;
    }
    & h2 {
      color: #0f1111;
      font-size: 24px;
      max-width: 100%;
      font-weight: 600;
      margin: 0;
      @media screen and (max-width: 768px) {
        font-size: 18px;
      }
    }
    #prod-store-link {
      display: block;
      max-width: 4.375rem;
      /* 70px */
      text-decoration: none;
      font-size: 15px;
      color: #007185;
      &:hover {
        color: #c7511f;
        text-decoration: underline;
      }
      @media screen and (max-width: 768px) {
        font-size: 12px;
      }
    }
    .prod-rating {
      display: inline-block;
      font-size: 13.5px;
      span {
        font-size: 16px;
      }
    }
    .rating-questions {
      display: inline-block;
      margin-left: 18px;
      font-size: 14px;
      a {
        color: #007185;
        text-decoration: none;
        &:hover {
          color: #c7511f;
          text-decoration: underline;
        }
      }
      span {
        padding-inline: 0.438rem;
        // 7px
      }
      @media screen and (max-width: 768px) {
        font-size: 12px;
      }
    }
    .product-price {
      #prod-discount-percent {
        font-size: 26px;
        font-weight: 400;
        color: #cc0c39;
        @media screen and (max-width: 768px) {
          font-size: 20px;
        }
        &::before {
          content: "-";
        }
        &::after {
          content: "%";
        }
      }
      #prod-updated-price {
        padding-left: 0.625rem;
        /* 10px */
        font-size: 28px;
        font-weight: 500;
        @media screen and (max-width: 768px) {
          font-size: 18px;
        }
        &::before {
          content: "$";
          font-size: 11px;
          position: relative;
          top: -0.7rem;
          @media screen and (max-width: 768px) {
            top: -0.32rem;
          }
        }
      }
      #list-price {
        color: #565959;
        font-size: 13px;
        padding-right: 0.25rem;
        /* 4px */
      }
      #old-price {
        color: #565959;
        font-size: 13px;
        text-decoration: line-through;
      }
      #shipping-details {
        color: #565959;
        font-size: 14px;
        font-weight: 500;
        a {
          padding-left: 4px;
          text-decoration: none;
          color: #007185;
          &:hover {
            color: #c7511f;
          }
        }
      }
    }
    .prod-spec-details {
      font-size: 14px;
      color: #565959;
      #color {
        padding-right: 0.25rem;
        /* 4px */
      }
      #chosen-color {
        font-weight: 500;
      }
      .color-variants {
        padding-top: 0.875rem;
        /* 14px */
        max-width: 100%;
        // 520
        display: flex;
        flex-wrap: wrap;
        gap: 0.438rem;
        /* 7px */
        .color-variant {
          border-radius: 12px;
          height: 5rem;
          // h 80px
          width: 4.063rem;
          // w 65px
          border: 1px solid #8d9096;
          cursor: pointer;
          &:hover {
            border: 1px solid #5a5d61;
          }
          #variant-box-color {
            display: block;
            line-height: 2.5rem;
            /* 40px */
            text-align: center;
            color: #0f1111;
            background-color: #fafafa;
            border-top-right-radius: 12px;
            border-top-left-radius: 12px;
            border-bottom: 1px solid #8d9096;
          }
          #variant-box-price {
            display: block;
            line-height: 2.5rem;
            /* 40px */
            text-align: center;
            color: #0f1111;
          }
        }
      }
      .prod-details {
        max-width: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        color: #0f1111;
        .prod-details-left {
          display: flex;
          flex-direction: column;
          font-weight: 500;
          gap: 0.438rem;
          /* 7px */
        }
        .prod-details-right {
          margin-left: 0.438rem;
          display: flex;
          flex-direction: column;
          gap: 0.438rem;
          /* 7px */
        }
      }
      .abc {
        float: right;
      }
    }
    .about-item {
      max-width: 100%;
      // 520
      font-weight: 600;
    }
  }
`;

const RIGHT_EDGE_DETAILS = styled.aside`
  width: 22%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding-inline: 0.75rem;
  /* 12px */
  @media screen and (max-width: 720px) {
    width: 30%;
  }
  .right-aside-container {
    border-radius: 6px;
    border: 1px solid #d5d9d9;
    box-sizing: border-box;
    padding-inline: 1.125rem;
    /* pi 18px */
    padding-block: 0.875rem;
    /* pt 14px */
    width: 100%;
    height: fit-content;
    @media screen and (max-width: 720px) {
      padding-inline: 0;
    }
    #aside-updated-price {
      font-size: 28px;
      font-weight: 500;
      vertical-align: middle;
      @media screen and (max-width: 768px) {
        font-size: 18px;
      }
    }
    &::before {
      content: "$";
      font-size: 14px;
      position: relative;
      top: -0.12rem;
      @media screen and (max-width: 768px) {
        font-size: 10px;
        padding-left: 8px;
      }
    }
  }
  #aside-count {
    vertical-align: middle;
    font-size: 13px;
    padding-left: 0.25rem;
    // 4px
  }
  #aside-shipping-dets {
    padding-top: 1.5rem;
    // pt 24px
    color: #565959;
    font-size: 14px;
    font-weight: 500;
    display: block;
    @media screen and (max-width: 768px) {
      padding-left: 8px;
    }
    a {
      text-decoration: none;
      color: #007185;
      &:hover {
        color: #c7511f;
      }
    }
  }
  .aside-delivery {
    font-size: 14px;
    @media screen and (max-width: 768px) {
      display: none;
    }
    #a-delivery-static {
      padding-right: 0.25rem;
      /* pr 4px */
      font-weight: 500;
    }
    #a-delivery-dynamic {
      font-weight: 700;
    }
    #a-delivery-hours {
      font-weight: 700;
      color: #148114;
    }
  }
  .deliver-to {
    padding-block: 1.125rem;
    /* 18px */
    figure {
      display: inline-block;
      img {
        padding-right: 0.25rem;
        // pr 4px
        width: 0.875rem;
        // w 14px
        height: 0.875rem;
        // h 14px
        vertical-align: middle;
        position: relative;
        top: -0.1rem;
      }
      a {
        text-decoration: none;
        color: #0f798c;
        font-size: 14px;
        font-weight: 500;
        &:hover {
          color: #c7511f;
        }
      }
    }
  }
  .if-in-stock {
    #is-in-stock {
      font-size: 18px;
      font-weight: 600;
      color: #007600;
      @media screen and (max-width: 768px) {
        font-size: 12px;
        padding-left: 8px;
      }
    }
  }
  .p-btns-details {
    padding-top: 0.75rem;
    // 12px
    @media screen and (max-width: 720px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      .resp-br-hide {
        display: none;
      }
    }
    .prod-btn {
      border: none;
      display: block;
      cursor: pointer;
      height: 1.875rem;
      // 30px
      width: 100%;
      border-radius: 14px;
      border: 1px solid transparent;
      margin-block: 0.5rem;
      // 8px
      box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.1);
      @media screen and (max-width: 720px) {
        width: 92%;
        margin-block: 0.24rem;
      }
      &:focus-within {
        border: 1px solid #008296;
        outline: 4px solid #c8f3fa;
      }
    }
    /* add to cart */
    .to-cart {
      background-color: #ffd814;
      border: 1px solid #fcd200;
      &:hover {
        background-color: #f7ca00;
      }
    }
    /* buy now */
    .buy-now {
      background-color: #ffa41c;
      border: 1px solid #ffa41c;
      &:hover {
        background-color: #fa8900;
      }
    }
    .details-left {
      margin-right: 0.25rem;
      // mr 4px
      font-size: 12px;
      font-weight: 600;
      line-height: 1rem;
      // 16px
      color: #565959;
      @media screen and (max-width: 720px) {
        display: none;
      }
    }
    .details-a {
      font-size: 12px;
      font-weight: 600;
      line-height: 1rem;
      // 16px
      text-decoration: none;
      color: #007185;
      &:hover {
        color: #c7511f;
      }
      @media screen and (max-width: 720px) {
        display: none;
      }
    }
    .details-right {
      font-size: 12px;
      font-weight: 600;
      line-height: 1rem;
      // 16px
      @media screen and (max-width: 720px) {
        display: none;
      }
    }
  }
`;

const DIVIDER = styled.div`
  border-radius: 18px;
  max-width: 95%;
  height: 1px;
  margin-block: 0.875rem;
  // mb 14px
  background-color: #bbbfbf;
`;

// for mobile
const PRODUCT_HOLDER_MOBILE = styled.main`
  float: left;
  padding-top: 0.75rem;
  /* 12px */
  padding-bottom: 3.125rem;
  /* 50px */
  width: 100%;
  height: 100%;

  .m-heading {
    width: 100%;
    float: left;
    box-sizing: border-box;
    padding-inline: 8px;

    p {
      font-size: 0.7rem;
      float: right;
      .star-count {
        color: #7c7c7cc5;
        margin-right: 3px;
      }
    }
    #m-p-title {
      float: left;
      display: block;
      font-size: 1rem;
      line-height: 1.4;
      color: #3a3a3ae1;
    }
  }
  .m-images-area {
    width: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 4px 4px;
    figure {
      max-width: 450px;
      max-height: 450px;
      img {
        width: 100%;
        max-height: 450px;
      }
    }
    .m-sm-images {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 10px;
      figure {
        max-width: 32px;
        max-height: 32px;
        outline: 1px solid gray;
        border: 2px solid transparent;
        border-radius: 8px;
        img {
          width: 100%;
          max-height: 32px;
          border-radius: 8px;
        }
      }
    }
  }
  .m-divider {
    float: left;
    width: 100%;
    height: 3px;
    background-color: #d5d9d9;
    margin-block: 8px;
  }
  .m-p-color {
    width: 100%;
    box-sizing: border-box;
    padding: 4px 4px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 18px;
    div {
      width: 72px;
      height: 64px;
      border: 1px solid #8d9096;
      border-radius: 12px;
      &:hover {
        border: 1px solid #5a5d61;
      }
      #m-p-color-color {
        font-size: 12px;
        display: block;
        background-color: #dfdfdf86;
        line-height: 30px;
        text-align: center;
        color: #0f1111;
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
        border-bottom: 1px solid #8d9096;
      }
      #m-p-color-price {
        font-size: 14px;
        display: block;
        text-align: center;
        color: #0f1111;
        line-height: 32px;
      }
    }
  }
  .m-p-buy {
    float: left;
    width: 100%;
    box-sizing: border-box;
    padding: 4px 18px;
    #m-p-price {
      font-size: 1.6rem;
      font-weight: 600;
      display: block;
      &::before {
        content: "$";
        font-size: 0.9rem;
        position: relative;
        top: -7px;
      }
    }
    #m-p-shipping {
      color: #5a5d61;
    }
    a {
      text-decoration: none;
      color: #0087b8;
      margin-left: 4px;
      &:hover {
        color: #c7511f;
      }
    }
    #m-in-stock {
      display: block;
      margin-block: 18px;
      color: #007600;
      font-weight: 600;
      font-size: 18px;
    }
    .m-p-buy-buttons {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      #m-buy-btn {
        color: black;
        background-color: #ffa41c;
        border: 1px solid #ffa41c;
        border: none;
        display: block;
        cursor: pointer;
        font-size: 18px;
        height: 2.6rem;
        width: 100%;
        border-radius: 14px;
        border: 1px solid transparent;
        margin-block: 0.5rem;
        // 8px
        box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.1);
        &:hover {
          background-color: #fa8900;
        }
        &:focus-within {
          border: 1px solid #008296;
          outline: 4px solid #c8f3fa;
        }
      }
      #m-addto-btn {
        color: black;
        background-color: #ffd814;
        border: 1px solid #fcd200;
        border: none;
        display: block;
        cursor: pointer;
        font-size: 18px;
        height: 2.6rem;
        width: 100%;
        border-radius: 14px;
        border: 1px solid transparent;
        margin-block: 0.5rem;
        // 8px
        box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.1);
        &:hover {
          background-color: #f7ca00;
        }
        &:focus-within {
          border: 1px solid #008296;
          outline: 4px solid #c8f3fa;
        }
      }
    }
  }
  .m-p-details {
    float: left;
    width: 100%;
    box-sizing: border-box;
    padding: 4px 18px;
    #m-p-details-h {
      font-size: 20px;
      font-weight: 600;
      display: block;
      margin-bottom: 8px;
    }
    .m-p-brand-details {
      width: 100%;
      display: flex;
      gap: 6px;
      .m-brand-details-left {
        font-weight: 600;
        font-size: 16px;
        display: flex;
        flex-direction: column;
      }
      .m-brand-details-right {
        font-size: 16px;
        display: flex;
        flex-direction: column;
      }
    }
  }
  .m-p-description {
    float: left;
    width: 100%;
    box-sizing: border-box;
    padding: 4px 18px;
    #m-p-description-h {
      font-size: 20px;
      font-weight: 600;
      display: block;
      margin-bottom: 8px;
    }
  }
`;

const ProductHolder = () => {
  const handleMouseEnter = (image, index) => {
    setMainImage(image);
    setActiveImage(index);
  };

  const { productId } = useParams();
  const dispatch = useDispatch();
  const push = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [productId, dispatch]);

  useEffect(() => {
    if (selectedProduct.images && selectedProduct.images.length > 0) {
      setMainImage(selectedProduct.images[0]);
    }
  }, [selectedProduct]);

  const [mainImage, setMainImage] = useState("");
  const [activeImage, setActiveImage] = useState(0);

  // if user is not logged in redirect to login page, else add item to cart
  const handleAddToCart = () => {
    if (!isLoggedIn) {
      push("/sign-in");
      return;
    }

    dispatch(addToCart(selectedProduct.id))
      .then(() => {
        dispatch(getMyCartProducts());
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const handleBuyNow = () => {
    push("/buy-now");
  };

  // Mobile Responsive
  const [mobileScreenWidth, setMobileScreenWidth] = useState(
    window.innerWidth < 576
  );

  useEffect(() => {
    const handleResize = () => {
      setMobileScreenWidth(window.innerWidth < 576);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      {mobileScreenWidth ? (
        <PRODUCT_HOLDER_MOBILE>
          <div className="m-heading">
            <p>
              <span className="star-count">4.1</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
            </p>
            <span id="m-p-title">{selectedProduct.name}</span>
          </div>
          <div className="m-images-area">
            <figure>
              <img src={mainImage} alt={selectedProduct.name} />
            </figure>
            <div className="m-sm-images">
              {selectedProduct.images.map((image, i) => (
                <figure key={i}>
                  <img
                    src={image}
                    alt={selectedProduct.name}
                    className={i === activeImage ? "active" : ""}
                    onMouseEnter={() => handleMouseEnter(image, i)}
                  />
                </figure>
              ))}
            </div>
          </div>
          <div className="m-divider"></div>
          <div className="m-p-color">
            <div>
              <span id="m-p-color-color">Color</span>
              <span id="m-p-color-price">{selectedProduct.price}$</span>
            </div>
            <div>
              <span id="m-p-color-color">Color</span>
              <span id="m-p-color-price">{selectedProduct.price}$</span>
            </div>
            <div>
              <span id="m-p-color-color">Color</span>
              <span id="m-p-color-price">{selectedProduct.price}$</span>
            </div>
          </div>
          <div className="m-divider"></div>
          <div className="m-p-buy">
            <span id="m-p-price">{selectedProduct.price}</span>
            <span id="m-p-shipping">Free shipping & Shipping to Georgia</span>
            <a href="...">Details</a>
            <span id="m-in-stock">In Stock</span>
            <div className="m-p-buy-buttons">
              <button id="m-buy-btn" onClick={handleBuyNow}>
                Buy Now
              </button>
              <button id="m-addto-btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
          <div className="m-divider"></div>
          <div className="m-p-details">
            <span id="m-p-details-h">Details</span>
            <div className="m-p-brand-details">
              <div className="m-brand-details-left">
                <span>Brand:</span>
                <span>Model:</span>
              </div>
              <div className="m-brand-details-right">
                <span>{selectedProduct.brand}</span>
                <span>{selectedProduct.model}</span>
              </div>
            </div>
          </div>
          <div className="m-divider"></div>
          <div className="m-p-description">
            <span id="m-p-description-h">Description</span>
            <p>{selectedProduct.description}</p>
          </div>
        </PRODUCT_HOLDER_MOBILE>
      ) : (
        <PRODUCT_HOLDER>
          <div className="left-side">
            <div className="sm-images">
              {selectedProduct.images.map((image, i) => (
                <figure key={i}>
                  <img
                    src={image}
                    alt={selectedProduct.name}
                    className={i === activeImage ? "active" : ""}
                    onMouseEnter={() => handleMouseEnter(image, i)}
                  />
                </figure>
              ))}
            </div>
            <div className="main-image">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "product-image",
                    isFluidWidth: true,
                    sizes:
                      "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw, 300px",
                    src: mainImage,
                  },
                  largeImage: {
                    src: mainImage,
                    width: 1200,
                    height: 1800,
                  },
                  shouldUsePositiveSpaceLens: true,
                  isHintEnabled: true,
                  shouldHideHintAfterFirstActivation: true,
                }}
              />
            </div>
          </div>
          <div className="middle">
            <h2>{selectedProduct.name}</h2>
            <a id="prod-store-link" href="">
              Visit store
            </a>
            <div className="prod-rating">
              4.1
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
            </div>
            <div className="rating-questions">
              <a href="">3.758 Ratings</a>
              <span>|</span>
              <a href="">28 Answered Questions</a>
            </div>
            <DIVIDER />
            <div className="product-price">
              {selectedProduct.oldPrice ? (
                <>
                  <span id="prod-discount-percent">...</span>
                  <span id="prod-updated-price">
                    {selectedProduct.newPrice}
                  </span>
                  <br />
                  <span id="list-price">Old Price:</span>
                  <span id="old-price">{selectedProduct.oldPrice}</span>
                  <br />
                </>
              ) : (
                <span id="prod-updated-price">{selectedProduct.price}</span>
              )}
              <br />
              <span id="shipping-details">
                Shipping to Georgia
                <a href="#">Details</a>
              </span>
            </div>
            <DIVIDER />
            <div className="prod-spec-details">
              <span id="color">Color:</span>
              <span id="chosen-color">Black</span>
              <div className="color-variants">
                <div className="color-variant">
                  <span id="variant-box-color">Black</span>
                  <span id="variant-box-price">{selectedProduct.price}</span>
                </div>
                <div className="color-variant">
                  <span id="variant-box-color">White</span>
                  <span id="variant-box-price">{selectedProduct.price}</span>
                </div>
                <div className="color-variant">
                  <span id="variant-box-color">Yellow</span>
                  <span id="variant-box-price">{selectedProduct.price}</span>
                </div>
                <div className="color-variant">
                  <span id="variant-box-color">Red</span>
                  <span id="variant-box-price">{selectedProduct.price}</span>
                </div>
                <div className="color-variant">
                  <span id="variant-box-color">Gray</span>
                  <span id="variant-box-price">{selectedProduct.price}</span>
                </div>
                <div className="color-variant">
                  <span id="variant-box-color">Black</span>
                  <span id="variant-box-price">{selectedProduct.price}</span>
                </div>
              </div>
              <DIVIDER />
              <div className="prod-details">
                <div className="prod-details-left">
                  <span id="details-left">Brand</span>
                  <span id="details-left">Model</span>
                  <span id="details-left">Material</span>
                </div>
                <div className="prod-details-right">
                  <span id="details-right">{selectedProduct.brand}</span>
                  <span id="details-right">{selectedProduct.model}</span>
                  <span id="details-right">Brand</span>
                </div>
              </div>
              <DIVIDER />
              <div className="about-item">
                <span>About This Item</span>
                <ul>
                  <li>{selectedProduct.description}</li>
                </ul>
              </div>
            </div>
          </div>
          <RIGHT_EDGE_DETAILS>
            <div className="right-aside-container">
              <span id="aside-updated-price">{selectedProduct.price}</span>
              <span id="aside-shipping-dets">
                Shipping to Georgia
                <br />
                <a href=".">Details</a>
              </span>
              <div className="aside-delivery">
                <span id="a-delivery-static">Delivery</span>
                <span id="a-delivery-dynamic">Monday, August 21.</span>
                <br />
                <span id="a-delivery-static">Order within</span>
                <span id="a-delivery-hours">4 hrs 43 mins</span>
              </div>
              <div className="deliver-to">
                <figure>
                  <a href=".">
                    <img src={Location_Img} alt="" />
                    Deliver to Georgia
                  </a>
                </figure>
              </div>
              <div className="if-in-stock">
                {selectedProduct.price ? (
                  <span id="is-in-stock">In Stock</span>
                ) : (
                  <span id="is-in-stock" style={{ color: "red" }}>
                    Not in Stock
                  </span>
                )}
              </div>
              <div className="p-btns-details">
                <button className="to-cart prod-btn" onClick={handleAddToCart}>
                  Add to Cart
                </button>
                <button className="buy-now prod-btn" onClick={handleBuyNow}>
                  Buy Now
                </button>
                <span className="details-left">Payment</span>
                <a className="details-a" href=".">
                  Secure transaction
                </a>
                <br className="resp-br-hide" />
                <span className="details-left">Ships from</span>
                <span className="details-right">Amazon.com</span>
                <br className="resp-br-hide" />
                <span className="details-left">Sold by</span>
                <span className="details-right">Amazon.com</span>
                <br className="resp-br-hide" />
                <span className="details-left">Returns</span>
                <a className="details-a" href=".">
                  Eligible for Return, Refund or Replacement within 30 days of
                  receipt
                </a>
                <br className="resp-br-hide" />
              </div>
            </div>
          </RIGHT_EDGE_DETAILS>
        </PRODUCT_HOLDER>
      )}
    </>
  );
};

export default ProductHolder;
