import { useEffect } from "react";
import ProductComponent from "../../components/Product/ProductComponent";

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <ProductComponent />;
};

export default ProductPage;
