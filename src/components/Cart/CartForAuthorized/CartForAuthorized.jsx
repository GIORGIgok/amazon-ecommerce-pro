import styled from "styled-components";
import CartItem from "./CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import {
  getMyCartProducts,
  removeFromCart,
} from "../../../features/cart/cartSlice";
import { useEffect } from "react";

const CART_FOR_SIGNED_IN = styled.main`
  width: 74%;
  height: auto;
  outline: 1px solid #d5d9d9;
  border-radius: 4px;
  background-color: #ffffff;
  box-sizing: border-box;
  padding-block: 20px;
  float: left;
  @media screen and (max-width: 768px) {
    width: 60%;
  }
  @media screen and (max-width: 545px) {
    width: 100%;
  }
  & .cart-signed-inner {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding-inline: 35px;
    h1 {
      margin-top: 0;
      font-size: 28px;
      font-weight: 600;
      @media screen and (max-width: 768px) {
        font-size: 24px;
      }
    }
    & .cart-empty {
      margin-bottom: 200px;
    }
  }
`;

const CartForAuthorized = () => {
  const dispatch = useDispatch();
  const { productsInCart, isLoading } = useSelector((state) => state.cart);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId))
    .then(() => {
      dispatch(getMyCartProducts());
    })
    .catch((error) => {
      console.error("error while removing product", error);
    });
  };

  return (
    <CART_FOR_SIGNED_IN>
      <div className="cart-signed-inner">
        <h1>Shopping Cart</h1>
        {isLoading ? (
          <div className="loading-bright">Loading...</div>
        ) : productsInCart.length === 0 ? (
          <div className="cart-empty">Cart is empty...</div>
        ) : (
          <CartItem data={productsInCart} onDelete={handleRemoveFromCart} />
        )}
      </div>
    </CART_FOR_SIGNED_IN>
  );
};

export default CartForAuthorized;
