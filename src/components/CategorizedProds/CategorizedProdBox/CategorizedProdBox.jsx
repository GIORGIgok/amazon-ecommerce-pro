import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CATEGORIZED_PROD_BOX = styled.div`
  width: 16.25rem;
  /* w 260px */
  min-height: fit-content;
  box-sizing: border-box;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  @media screen and (max-width: 1064px) {
    width: 100%;
  }
  a {

  figure {
    width: 100%;
    padding-block: 1rem;
    /* pb 16px */
    text-align: center;
    background-color: #f7f7f7;
  }
  img {
    max-width: 15.125rem;
    max-height: 15.125rem;
    /* 242px */
    mix-blend-mode: multiply;
    @media screen and (max-width: 420px) {
      width: 11rem;
    }
  }
}
  .under-image-info {
    padding-inline: 0.563rem;
    padding-bottom: 0.3rem;
    /* 9px */
    #prod-title {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      font-size: 16px;
      text-decoration: none;
      color: black;
      &:hover {
        color: #c45500;
      }
    }
    .stars {
      padding-bottom: 0.75rem;
      /* pb 12px */
      max-width: max-content;
      cursor: pointer;
    }
    .price {
      a {
        text-decoration: none;
        color: black;

        #price-at-moment {
          font-size: 28px;
          &::before {
            content: "$";
            position: relative;
            top: -0.9em;
            left: -0.1em;
            font-size: 11px;
            font-weight: 700;
          }
        }
        #price-before {
          color: #565959;
          padding-left: 0.5rem;
          /* pl 8px */
          font-size: 14px;
          span {
            text-decoration: line-through;
            &::before {
              content: "$";
            }
          }
        }
      }
    }
    #shipping-to {
      font-size: 12px;
    }
  }
`;

const CategorizedProdBox = ({ product }) => {
  const generateRandomStars = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const randomStars = generateRandomStars(2, 5);
  const starRating = "⭐".repeat(randomStars);

  return (
    <CATEGORIZED_PROD_BOX>
      <Link to={`/ProductPage/${product.id}/`}>
        <figure>
          <img src={product.images[0]} alt={product.name} />
        </figure>
      </Link>
      <div className="under-image-info">
        <Link id="prod-title" to={`/ProductPage/${product.id}/`}>
          {product.name}
        </Link>
        <div className="stars">
          <span>{starRating}</span>
        </div>
        <div className="price">
          <Link id="prod-title" to={`/ProductPage/${product.id}/`}>
            <span id="price-at-moment">{product.price}</span>
            {product.oldPrice && (
              <span id="price-before">
                List: <span>{product.oldPrice}</span>
              </span>
            )}
          </Link>
        </div>
        <span id="shipping-to">Ships to Georgia</span>
      </div>
    </CATEGORIZED_PROD_BOX>
  );
};

export default React.memo(CategorizedProdBox);
