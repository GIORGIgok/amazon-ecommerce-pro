import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchMostDemandProducts } from "../../../features/products/productsSlice";
import { useEffect, lazy, Suspense } from "react";
import RightSumChecker from "../CartForAuthorized/RightSumChecker/RightSumChecker";
const FreqPurchasedsTemplate = lazy(() => import("./FreqPurchasedsTemplate"));

const CART_RIGHT_ASIDE = styled.aside`
  float: right;
  width: 24%;
  @media screen and (max-width: 768px) {
    width: 38%;
  }
  @media screen and (max-width: 545px) {
    width: 100%;
  }
  .sum-check {
    width: 100%;
  }
  .freq-purchased {
    // New customers frequently purchased
    float: right;
    border-radius: 5px;
    outline: 1px solid #d5d9d9;
    width: 100%;
    height: auto;
    background-color: #ffffff;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    @media screen and (max-width: 545px) {
      display: none;
    }
    h2 {
      margin: 12px 17px auto 17px;
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
      @media screen and (max-width: 576px) {
        font-size: 14px;
      }
    }
  }
`;
const BOX_CONTAINER = styled.section`
  width: 100%;
  height: calc(100% - 60px);
`;

const CartRightSection = () => {
  const mostDemandProducts = useSelector(
    (state) => state.products.mostDemandProducts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMostDemandProducts());
  }, []);

  return (
    <CART_RIGHT_ASIDE>
      <article className="sum-check">
        <RightSumChecker />
      </article>
      <div className="freq-purchased">
        <h2>New Customers frequently purchased</h2>
        <BOX_CONTAINER>
          <Suspense fallback={<div className="loading-bright">Loading...</div>}>
            {mostDemandProducts.map((item) => (
              <FreqPurchasedsTemplate
                key={item.id}
                id={item.id}
                title={item.name}
                price={item.price}
                image={item.images[2]}
              />
            ))}
          </Suspense>
        </BOX_CONTAINER>
      </div>
    </CART_RIGHT_ASIDE>
  );
};

export default CartRightSection;
