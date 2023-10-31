import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchProductById,
} from "../../../features/products/productsSlice";

const NAV_CATEGORY_LINE = styled.div`
  float: left;
  width: 100%;
  height: 2rem;

  ul {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    margin: 0;
    padding-left: 20px;
    list-style: none;
  }

  li {
    a {
      text-decoration: none;
      color: #565959;
      &:hover {
        text-decoration: underline;
      }
    }
    span {
      padding-inline: 4px;
    }
  }
`;

const CategoryLine = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch]);

  // const allProducts = useSelector((state) => state.products.allProducts);
  const allCategories = useSelector((state) => state.products.allCategories);
  const productCategoryId = useSelector((state) => state.products.selectedProduct.categoryId);

  if ( allCategories.length === 0 ) {
    return (
      <div style={{ fontSize: "14px", paddingLeft: "20px" }}>Loading...</div>
    );
  }
  // compare category id with product category id and then get it's name in return.
  const category = allCategories.find(
    (category) => category.id === productCategoryId
  );
  
  if (!category) {
    // Handle the case where category is not found (added for offers)
    return (
      <NAV_CATEGORY_LINE>
        <ul>
          <li>
            <NavLink to="/">Main</NavLink>
            <span>›</span>
          </li>
        </ul>
      </NAV_CATEGORY_LINE>
    );
  }
  
  const categoryId = category.id;
  
  return (
    <NAV_CATEGORY_LINE>
      <ul>
        <li>
          <NavLink to="/">Main</NavLink>
          <span>›</span>
        </li>
        <li>
          <NavLink to={`/CategorizedProds/${categoryId}`}>
            {category.name}
          </NavLink>
        </li>
      </ul>
    </NAV_CATEGORY_LINE>
  );
};

export default CategoryLine;
