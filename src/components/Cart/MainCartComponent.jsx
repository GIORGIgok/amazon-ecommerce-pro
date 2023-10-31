import styled from "styled-components";
import CartRightSection from "./FrequentlyPurchased/CartRightSection";
import CartForUnauthorized from "./CartForUnauthorized/CartForUnauthorized";
import { useSelector } from "react-redux";
import CartForAuthorized from "./CartForAuthorized/CartForAuthorized";

const CART_MAIN_CONTAINER = styled.section`
  width: 100%;
  height: auto;
  background-color: #eaeded;
  box-sizing: border-box;
  padding: 1.125rem 1.125rem;
  /* 18px */
  float: left;
`;

const MainCartComponent = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <CART_MAIN_CONTAINER>
      {/*         -          */}
      <CartRightSection />
      {/*         -          */}
      {isLoggedIn ? <CartForAuthorized /> : <CartForUnauthorized />}
    </CART_MAIN_CONTAINER>
  );
};

export default MainCartComponent;
