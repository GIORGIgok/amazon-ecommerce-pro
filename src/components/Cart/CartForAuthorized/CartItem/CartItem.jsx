import styled from "styled-components";
import { Link } from "react-router-dom";

const CART_ITEM = styled.article`
  width: 100%;
  height: 13.75rem;
  /* h 220px */
  box-sizing: border-box;
  padding: 0.75rem 0 0.75rem 0.75rem;
  /* p 12px */
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  display: flex;
  justify-content: space-between;
  margin-block: 0.25rem;
  /* mb 4px */
  gap: 0.625rem;
  /* hap 10px */
  @media screen and (max-width: 771px) {
    flex-direction: column;
    height: auto;
  }
  & .i-left-side {
    min-width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      figure {
        width: 10.5rem;
        /* 168px */
        height: 10.5rem;
        /* 168px */
        display: flex;
        justify-content: center;
        align-items: center;
        & img {
          width: 85%;
          max-height: 100%;
        }
      }
    }
  }
  & .i-right-side {
    width: 75%;
    padding-block: 8px;
    @media screen and (max-width: 720px) {
      width: 100%;
    }
    a {
      font-size: 18px;
      font-weight: 600;
      text-decoration: none;
      color: #0f1111;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
    .i-price {
      font-size: 18px;
      font-weight: 700;
      display: block;
      width: fit-content;
      line-height: 24px;
      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
    .i-in-stock {
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
      color: #428542;
      display: block;
      width: fit-content;
    }
    #plus {
      display: block;
      width: fit-content;
      cursor: pointer;
    }
    .i-qty {
      display: block;
      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }
    #minus {
      display: block;
      width: fit-content;
      cursor: pointer;
    }
    .i-opt {
      font-size: 12px;
      color: #2987a0;
      cursor: pointer;
      padding-inline: 8px;
      border-left: 1px solid #dddddd;
      border-right: 1px solid #dddddd;
      &:hover {
        text-decoration: underline;
      }
      @media screen and (max-width: 945px) {
        line-height: unset;
      }
      @media screen and (max-width: 323px) {
        padding-inline: 0;
        margin-inline: 0.375rem;
        /* mi 6px */
      }
    }
  }
`;

const CartItem = ({ data, onDelete }) => {
  return (
    <>
      {data.map((item, index) => (
        <CART_ITEM key={index}>
          <div className="i-left-side">
            <Link to={`/productPage/${item.id}/`}>
              <figure>
                <img src={item.images} alt={item.name} />
              </figure>
            </Link>
          </div>
          <div className="i-right-side">
            <Link to={`/productPage/${item.id}/`}>
              {item.name}
            </Link>
            <span className="i-price">{item.price}</span>
            <span className="i-in-stock">In stock</span>
            <span id="plus">+</span>
            <span className="i-qty">Qty: 1</span>
            <span id="minus">-</span>
            <span className="i-opt" onClick={() => onDelete(item.id)}>
              Delete
            </span>
            <span className="i-opt">Save for later</span>
            <span className="i-opt">Share</span>
          </div>
        </CART_ITEM>
      ))}
    </>
  );
};
export default CartItem;
