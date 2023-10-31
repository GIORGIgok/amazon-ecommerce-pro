import styled from "styled-components";
import { Link } from "react-router-dom";

const CART_NOT_SIGNED_IN = styled.div`
  width: 74%;
  height: auto;
  @media screen and (max-width: 768px) {
    width: 60%;
  }
  @media screen and (max-width: 545px) {
    width: 100%;
  }
  .cart-not-signed-in {
    width: 100%;
    min-height: 15rem;
    /* mh 240px */
    background-color: #ffffff;
    position: relative;
    @media screen and (max-width: 768px) {
      min-width: 15rem;
      /* mw 240px */
      display: flex;
      justify-content: space-between;
      align-items: center;
      figure {
        position: static;
      }
    }
  }
  figure {
    display: inline;
    float: left;
    width: 32%;
    box-sizing: border-box;
    position: absolute;
    top: 1.563rem;
    /* t 25px */
    left: 1.063rem;
    /* 17px */
  }
  .not-signed-text-area {
    float: right;
    width: 63%;
    height: 100%;
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      h2 {
        margin: 0;
        font-size: 24px;
        text-align: center;
      }
      #cart-register {
        margin-top: 0.5rem;
        /* 8px */
      }
      #cart-sign-in,
      #cart-register {
        font-size: 12px;
      }
    }
  }
  h2 {
    font-size: 26px;
    color: #0f1111;
    margin-bottom: 0;
    margin-top: 2.5rem;
    /* mt 40px */
  }
  #shop-today {
    display: block;
    box-sizing: content-box;
    margin-bottom: 1.75rem;
    /* mb 28px*/
    text-decoration: none;
    color: #007195;
    font-size: 14px;
    font-weight: 500;
    max-width: fit-content;
    &:hover {
      text-decoration: underline;
      color: #c7511f;
      cursor: pointer;
    }
  }

  #cart-sign-in,
  #cart-register {
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);
    padding-block: 0.25rem;
    /* pb 4px */
    font-size: 14px;
    font-weight: 600;
    &:active {
      outline: 3px solid #c8f3fa;
      border: 1px solid #008296;
    }
  }

  #cart-sign-in {
    padding-inline: 0.625rem;
    /* pi 10px */
    background-color: #ffd814;
    border: 1px solid #f2c200;
    color: black;
    text-decoration: none;
    border-radius: 7px;
    &:hover {
      cursor: pointer;
      background-color: #f7ca00;
    }
  }
  #cart-register {
    padding-inline: 0.625rem;
    /* pi 10px */
    border: 1px solid #d5d9d9;
    text-decoration: none;
    margin-left: 0.75rem;
    /* ml 12px */
    border-radius: 7px;
    color: black;
    font-weight: 500;
    &:hover {
      cursor: pointer;
      background-color: #f7fafa;
    }
  }
  .cart-page-warning {
    float: left;
    margin-top: 1.25rem;
    /* mt 20px */
    width: 100%;
    height: 5rem;
    /* h 80px */
    background-color: #ffffff;
    position: relative;
    @media screen and (max-width: 768px) {
      height: 6.875rem;
      /* h 110px */
    }
    @media screen and (max-width: 545px) {
      margin-block: 6.7rem;
    }
    .cart-warning-txt {
      position: absolute;
      left: 0.625rem;
      /* l 10px */
      top: 0.75rem;
      /* t 12px */
      font-size: 12px;
      @media screen and (max-width: 768px) {
        font-size: 10px;
      }
      a {
        text-decoration: none;
        color: #007185;
        &:hover {
          text-decoration: underline;
          color: #c7511f;
        }
      }
    }
  }
`;

const CartForUnauthorized = () => {
    return (
        <CART_NOT_SIGNED_IN>
        <div className="cart-not-signed-in">
        <figure>
          <img src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" alt="cart"/>
        </figure>
        <div className="not-signed-text-area">
          <h2>Sign-in for shopping</h2>
          <a id="shop-today" href="/">
            Shop today's deals
          </a>
          <Link id="cart-sign-in" to="/sign-in">
            Sign in to your account
          </Link>
          <Link id="cart-register" to="/register">
            Sign up now
          </Link>
        </div>
      </div>
      <div className="cart-page-warning">
        <span className="cart-warning-txt">
          The price and availability of items at Amazon.com are subject to
          change. The Cart is a temporary place to store a list of your items
          and reflects each item's most recent price. <br />
          Shopping Cart <a href="/">Learn more</a>
          <br />
          Do you have a gift card or promotional code? We'll ask you to enter
          your claim code when it's time to pay.
        </span>
      </div>
      </CART_NOT_SIGNED_IN>
    )
}

export default CartForUnauthorized;