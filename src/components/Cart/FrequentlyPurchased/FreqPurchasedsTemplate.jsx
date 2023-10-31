import { useDispatch, useSelector } from "react-redux";
import styed from "styled-components";
import { addToCart, getMyCartProducts } from "../../../features/cart/cartSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FREQUENTLY_PURCHASED_PROD = styed.article`
    box-sizing: border-box;
    margin-block: 18px;
    padding-inline: 8px;
    width: 100%;
    height: 110px;

    .freq-p-prod {
        float: left;
        width: 100%;
        height: 100%;
        @media screen and (max-width: 720px) {
          display: flex;
          justify-content: space-between;
          gap: 8px;
        }
    }
    .freq-p-img {
        float: left;
        width: 37%;
        height: 100%;
        padding-top: 8px;
        @media screen and (max-width: 768px) {
        }
        & a {
            display: inline-block;
            width: 100%;
            height: 100%;
          & figure {
            width: 85%;
            @media screen and (max-width: 768px) {
              max-width: 84px;
              max-height: 84px;
            }
            & img {
              width: 100%;
            }
          }
        }
    }
    .freq-p-specs {
        float: left;
        width: 63%;
        height: 100%;
    }
    #freq-p-title {
        float: left;
        height: 2.8em;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-decoration: none;
        color: #0087B8;
        font-size: 14px;
        &:hover {
            text-decoration: underline;
            color: #c7511f;
        }
        @media screen and (max-width: 576px) {
          font-size: 12px;
        }
    }    
    .freq-p-rating {
        width: 100%;
        height: 12%;
        font-size: 13px;
        display: flex;
    }
    .freq-p-price {
        display: block;
        margin-block: 3px;
        font-size: 14px;
        font-weight: 600;
        color: #b12704;
        @media screen and (max-width: 576px) {
          font-size: 12px;
        }
    }
    .freq-p-btn {
        display: inline-block;
        & button {
            font-size: 11px;
            padding: 3px 8px;
            border: none;
            border-radius: 8px;
            box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.1);
            background-color: #ffd814;
            border: 1px solid transparent;
            &:hover {
                cursor: pointer;
                background-color: #f7ca00;
            }
            &:active {
                outline: 3px solid #c8f3fa;
                border: 1px solid #008296;
            }
        }
    }
`;

const FreqPurchasedsTemplate = ({ id, title, price, image }) => {
  const dispatch = useDispatch();

  const push = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const handleAddToCart = () => {
    if (!isLoggedIn) {
      push("/sign-in");
      return;
    }

    dispatch(addToCart(id))
    .then(() => {
      dispatch(getMyCartProducts());
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const generateRandomStars = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const randomStars = generateRandomStars(2, 5);
  const starRating = "⭐".repeat(randomStars);
  return (
    <FREQUENTLY_PURCHASED_PROD>
      <div className="freq-p-prod">
        <div className="freq-p-img">
          <a href={`/productPage/${id}/`}>
            <figure>
              <img src={image} alt="frequently-purchased" />
            </figure>
          </a>
        </div>

        <div className="freq-p-specs">
          <a id="freq-p-title" href={`/productPage/${id}/`}>
            {title}
          </a>

          <div className="freq-p-rating">
            {/* i use Array.from() to create an array with a length equal to the rounded rating. */}
            {/* second argument of Array.from() is a mapping function that will be applied to each element of the array. */}
            <span>{starRating}</span>
          </div>

          <span className="freq-p-price">{price}$</span>

          <div className="freq-p-btn">
            <button id="freq-add-btn" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </FREQUENTLY_PURCHASED_PROD>
  );
};

export default FreqPurchasedsTemplate;
