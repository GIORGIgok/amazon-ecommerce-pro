import { useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const RIGHT_SUM_CHECKER = styled.aside`
  width: 100%;
  height: fit-content;
  margin-bottom: 18px;
  background-color: #ffffff;
  outline: 1px solid #d5d9d9;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 18px 20px;
  @media screen and (max-width: 922px) {
    padding: 14px 18px;
  }
  @media screen and (max-width: 545px) {
    padding: 14px 36px;
  }
  @media screen and (max-width: 294px) {
    padding-inline: 12px;
  }
  #subtotal-left {
    font-size: 18px;
    font-weight: 600;
  }
  span {
    font-size: 16px;
    font-weight: 700;
  }
  button {
    color: black;
    margin-top: 10px;
    margin-bottom: 2px;
    line-height: 30px;
    border-radius: 8px;
    width: 100%;
    border: 0;
    background-color: #ffd814;
    box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.1);
    &:hover {
      cursor: pointer;
      background-color: #f1cf24;
    }
    &:focus {
          outline: 1px solid #0bafc9;
        }
  }
`;

const RightSumChecker = () => {
  const inCartQuantity = useSelector(
    (state) => state.cart.productsInCart.length
  );
  const sum = useSelector((state) =>
    state.cart.productsInCart.reduce((acc, item) => acc + item.price, 0).toFixed(2)
  );

  // --- \\
  const push = useNavigate();
  const handlePushToCheckout = () => {
    push("/checkout");
  }

  // conditionally render this component if user is logged in and cart is not empty
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const cartNotEmpty = useSelector((state) => state.cart.productsInCart.length > 0);
  if (!isLoggedIn || !cartNotEmpty) {
    return null;
  }

  return (
    <RIGHT_SUM_CHECKER>
      <span id="subtotal-left">Subtotal({inCartQuantity}):</span>
      <span> ${sum}</span>
      <button onClick={handlePushToCheckout}>Proceed to checkout</button>
    </RIGHT_SUM_CHECKER>
  );
};

export default RightSumChecker;
// exported to CartRightSection.jsx
