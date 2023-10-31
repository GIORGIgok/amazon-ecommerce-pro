import styled from "styled-components";
import amazon_transparent from "../../../assets/imgs/am-logo-transparent.png";
import lock_img from "../../../assets/imgs/lock.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const HEADER = styled.header`
  width: 100%;
  height: 4.563rem;
  /* 73px */
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #dddddd;
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5046393557422969) 65%,
    rgba(235, 235, 235, 1) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5046393557422969) 65%,
    rgba(235, 235, 235, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5046393557422969) 65%,
    rgba(235, 235, 235, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ebebeb",GradientType=1);
  & .logo-box {
    width: 22%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 576px) {
      width: 25%;
    }
    & #logo {
      height: 2.438rem;
      /* h 39px */
      width: 6.563rem;
      /* w 105px */
      & img {
        width: 100%;
        text-align: center;
      }
    }
  }
  & .checkout-box {
    width: 50%;
    @media screen and (max-width: 576px) {
      width: 60%;
    }
    & h1 {
      margin: 0;
      font-weight: 400;
      text-align: center;
      @media screen and (max-width: 576px) {
        font-size: 24px;
      }
      & span {
        color: #007185;
        font-size: 28px;
        @media screen and (max-width: 576px) {
          font-size: 24px;
        }
      }
    }
  }
  & .lock-box {
    width: 28%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 576px) {
      width: 15%;
    }
    & #lock {
      height: 1.313rem;
      /* h: 21px */
      width: 1rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const CheckoutHeader = () => {

const location = useLocation();

  const prodsQty = useSelector((state) => state.cart.productsInCart.length);

  return (
    <HEADER>
      <div className="logo-box">
        <figure id="logo">
          <Link to="/">
            <img src={amazon_transparent} alt="amazon-logo" />
          </Link>
        </figure>
      </div>
      <div className="checkout-box">
        <h1>
          Checkout {location.pathname === "/checkout" && (<>(<span>{prodsQty}</span>)</>)}
        </h1>
      </div>
      <div className="lock-box">
        <figure id="lock">
          <img src={lock_img} alt="lock" />
        </figure>
      </div>
    </HEADER>
  );
};

export default CheckoutHeader;
