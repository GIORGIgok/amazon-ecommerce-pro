import styled from "styled-components";
import DealsCarousel from "../Common/CarouselsAndSliders/DealsCarousel/DealsCarousel";
import PrimaryCarousel from "../Common/CarouselsAndSliders/PrimaryCarousel/PrimaryCarousel";
import ProductBox from "../Common/MultiProductBoxes/ProductBox";
import {
  fetchLatestProducts,
  fetchMostDemandProducts,
  fetchOffers,
} from "../../features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const HOME_SECTION_WRAPPER = styled.section`
  width: 100%;
  height: 100%;
  padding-inline: 1.3rem;
  /* 20.8 px */
  box-sizing: border-box;
  // so many backgrounds for wider browser compatibility.
  background: rgb(227, 230, 230);
  background: -moz-linear-gradient(
    0deg,
    rgba(227, 230, 230, 1) 75%,
    rgba(232, 232, 232, 0.25) 107%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(227, 230, 230, 1) 75%,
    rgba(232, 232, 232, 0.25) 107%
  );
  background: linear-gradient(
    0deg,
    rgba(227, 230, 230, 1) 75%,
    rgba(232, 232, 232, 0.25) 107%
  );
  .upper-boxes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }
`;
// here was regulated vertical positioning of sec.prod.box.
// it's important because of first prod.box. which is overflowed on main slider.
const SEC_PROD_BOX_Y = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  .product-box-multiple {
    transform: translateY(-15.5%);
  }
`;

// here are all home section product components by hierarchy...
const HomeStructure = () => {
  const dispatch = useDispatch();
  const latestProducts = useSelector((state) => state.products.latestProducts);
  const mostDemandProducts = useSelector(
    (state) => state.products.mostDemandProducts
  );
  const offers = useSelector((state) => state.products.offers);

  useEffect(() => {
    dispatch(fetchLatestProducts());
    dispatch(fetchMostDemandProducts());
    dispatch(fetchOffers());
  }, [dispatch]);

  // since there weren't enough images in data, I used this trick:
  // created a new array with 3 empty elements, filled each empty
  // element with the entire products array, combined the arrays
  // inside to make one single array - using flat().
  const repeatedLatestProducts = Array(3).fill(latestProducts).flat();
  const repeatedMostDemandProducts = Array(3).fill(mostDemandProducts).flat();
  const repeatedOffers = Array(3).fill(offers).flat();

  // sliced latest and most demand products to use in boxes
  const slicedLatest1 = latestProducts.slice(0, 4);
  const slicedMostDemand1 = mostDemandProducts.slice(0, 4);
  const slicedLatest2 = latestProducts.slice(3, 7);
  const slicedMostDemand2 = mostDemandProducts.slice(3, 7);

  return (
    <HOME_SECTION_WRAPPER>
      <article className="upper-boxes">
        <ProductBox data={slicedLatest1} title="Latest Products" />
        <ProductBox data={slicedMostDemand1} title="Deals & Promotions" />
        <ProductBox data={slicedLatest2} title="Most Demand" />
        <ProductBox data={slicedMostDemand2} title="Top Deal" />
      </article>

      <PrimaryCarousel title="Latest Products" data={repeatedLatestProducts} />
      <PrimaryCarousel
        title="Most demand Products"
        data={repeatedMostDemandProducts}
      />

      <SEC_PROD_BOX_Y>
        <ProductBox data={slicedMostDemand1} title="Last Added" />
        <ProductBox data={slicedLatest1} title="Technics" />
        <ProductBox data={slicedLatest2} title="Popular In Your Area" />
        <ProductBox data={slicedMostDemand2} title="Top Deal" />
      </SEC_PROD_BOX_Y>

      <DealsCarousel title="Offers" data={repeatedOffers} />
    </HOME_SECTION_WRAPPER>
  );
};

export default HomeStructure;
