import styled from "styled-components";
import NavCategoryLine from "./CategoryLine/NavCategoryLine";
import ProductHolder from "./ProductHolder/ProductHolder";
// import productImagesData from "./productImagesData";

const PRODUCT_MAIN = styled.section`
  float: left;
  width: 100%;
  height: auto;
`;

const ProductComponent = () => {
  return (
    <PRODUCT_MAIN>
      <NavCategoryLine />
      <ProductHolder />
    </PRODUCT_MAIN>
  );
};

export default ProductComponent;
