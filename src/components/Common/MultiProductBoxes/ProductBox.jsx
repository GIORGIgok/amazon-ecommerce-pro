import styled from "styled-components";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

const PRODUCTS_CONTAINER = styled.article`
  box-sizing: border-box;
  display: flex;
  position: relative;

  .product-box-multiple {
    position: relative;
    transform: translateY(-22%);
    box-sizing: border-box;
    height: 27.45rem;
    // h 420px
    width: 19.8rem;
    // w 320px
    background-color: #ffffff;
    padding-inline: 0.75rem;
    // p-i 12px;
    h2 {
      height: 3.125rem;
      // 50px; \
      color: #0f1111;
      font-size: 1.313rem;
      /* 21px */
      display: block;
      margin-bottom: 0;
    }
    .images-wrapper {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      article {
        width: 47%;
        padding-bottom: 14px;
        a {
          width: 100%;
          text-decoration: none;
          font-size: 12px;
          color: #0e0e0e;
          figure {
            width: 135px;
            height: 118px;
            @media screen and (max-width: 375px) {
            }
            img {
              width: 100%;
              height: 100%;
              @media screen and (max-width: 375px) {
              }
            }
          }
        }
      }

      #see-more {
        display: block;
        width: 100%;
        color: #007185;
        font-size: 0.813rem;
        // 13px
        font-weight: 600;
        text-decoration: none;
        position: absolute;
        left: 0.75rem;
        // p-i 12px;
        bottom: 1.563rem;
        /* b 25px */
        width: 100%;
        &:hover {
          text-decoration: underline;
          color: #c7511f;
          cursor: pointer;
        }
      }
    }
  }
`;
const ProductBox = ({ data, title }) => {
  // function for shortening text
  function shortenText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }

  return (
    <PRODUCTS_CONTAINER>
      <div className="product-box-multiple">
        <h2>{title}</h2>
        <div className="images-wrapper">
          {data.map((item, i) => (
            <article key={i}>
              <Link to={`/productPage/${item.id}/`}>
                <LazyLoad>
                  <figure>
                    <img src={item.images[3]} alt={item.name} />
                  </figure>
                </LazyLoad>
                <span>{shortenText(item.name, 20)}</span>
              </Link>
            </article>
          ))}
          <a id="see-more" href="#">
            See more
          </a>
        </div>
      </div>
    </PRODUCTS_CONTAINER>
  );
};

export default ProductBox;
