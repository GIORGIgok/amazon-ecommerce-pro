import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchAllProducts } from "../../../../features/products/productsSlice";
import { Link } from "react-router-dom";
import searchimg from "./../../../../assets/imgs/search.png";

const FORM = styled.form`
  display: inline-flex;
  max-width: 70%;
  flex-shrink: 1;
  flex-grow: 1;
  border: 3px solid transparent;
  position: relative;
  @media screen and (max-width: 771px) {
    display: flex;
  }
  &:focus-within {
    outline: none;
    border: 3px solid #ff9900;
    border-radius: 0.55rem;
  }
  & input {
    width: 100%;
    /* 675px */
    height: 2.375rem;
    /* 38px */
    border-top-left-radius: 0.313rem /*5px*/;
    border-bottom-left-radius: 0.313rem /*5px*/;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border: none;
    font-size: 1rem /*16px*/;
    padding-block: 0px !important;
    &::placeholder {
      color: #686868;
      font-size: 1rem;
      font-weight: 500;
      @media screen and (max-width: 771px) {
        color: #2c2c2c;
        font-size: 0.9rem /*16px*/;
        font-weight: 500;
      }
      @media (min-width: 0px) and (max-width: 576px) {
        color: #2c2c2c;
        font-size: 0.7rem /*16px*/;
        font-weight: 500;
      }
    }
    &:focus {
      outline: none;
    }
    @media screen and (max-width: 771px) {
      font-size: 0.9rem /*16px*/;
    }
  }
  & button {
    background-color: #febd69;
    border: none;
    border-top-right-radius: 0.313rem /*5px*/;
    border-bottom-right-radius: 0.313rem /*5px*/;
    cursor: pointer;
    font-size: 1.5rem /*24px*/;
    padding-left: 0.625rem /*10px*/;
    padding-right: 0.625rem /*10px*/;
    width: 2.813rem;
    /* 45px */
    background-image: url(${searchimg});
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
    &:hover {
      background: #f3a847;
      background-image: url(${searchimg});
      background-size: 60%;
      background-repeat: no-repeat;
      background-position: center;
    }
    @media (min-width: 0px) and (max-width: 576px) {
      width: 2.2rem;
      font-size: 1rem;
      font-weight: 600;
    }
  }
  .search-list {
    position: absolute;
    z-index: 500;
    top: 42px;
    left: 0;
    background-color: white;
    width: 100%;
    height: auto;
    max-height: 450px;
    border-radius: 3px;
    overflow-y: scroll;
    & ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      padding: 0;
    }
    & a {
      text-decoration: none;
      color: #0e0e0e;
      li {
        font-size: 16px;
        font-weight: 500;
        box-sizing: border-box;
        padding-block: 6px;
        padding-left: 8px;
        cursor: pointer;
        @media screen and (max-width: 470px) {
          font-size: 13px;
        }
        &:hover {
          background-color: #eeeeee;
        }
      }
    }
  }
`;

const DARK_OVERLAY = styled.div`
  position: fixed;
  top: 56px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.68);
  z-index: 2;
`;

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const allProducts = useSelector((state) => state.products.allProducts);

  const handleInputChange = (e) => {
    const searchText = e.target.value; // getting typed text
    setSearchText(searchText); // setting typed text to state

    // checking all the products to see if they match what was typed
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    // taking the matching products and make their names shorter if needed
    const slicedFiltered = filtered.map((product) => ({
      id: product.id,
      name:
        product.name.length > 25
          ? `${product.name.slice(0, 25)}...`
          : product.name,
    }));
    setFilteredProducts(slicedFiltered);
  };

  // overlay hide function
  const handleOverlayHide = () => {
    setFilteredProducts([]);
    setSearchText("");
  };

  // prevent refresh for search btn
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const dispatch = useDispatch();

  // from back-end we have not dynamic count of products so i set it to 500
  useEffect(() => {
    dispatch(fetchAllProducts(500));
  }, [dispatch]);

  return (
    <FORM onSubmit={handleSearchSubmit}>
      <input
        type="text"
        name="search"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Search Amazon"
      />
      <button className="img-button"></button>
      {searchText && (
        <>
          <div className="search-list">
            <ul>
              {filteredProducts.map((product) => (
                <Link to={`/productPage/${product.id}/`} key={product.id}>
                  <li>{product.name}</li>
                </Link>
              ))}
            </ul>
          </div>
          <DARK_OVERLAY onClick={handleOverlayHide} />
        </>
      )}
    </FORM>
  );
}
