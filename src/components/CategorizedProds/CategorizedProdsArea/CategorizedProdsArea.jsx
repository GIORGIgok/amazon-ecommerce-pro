import styled from "styled-components";
import React, { useEffect, useState, Suspense, lazy } from "react";
const CategorizedProdBox = lazy(() =>
  import("../CategorizedProdBox/CategorizedProdBox")
);
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategoryId } from "../../../features/products/productsSlice";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";

const CATEGORIZED_PRODS_AREA = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-block: 25px;

  /* right side - products */
  .right-side-prods {
    width: 80%;
    height: auto;
    padding-inline: 6px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1082px) {
      width: 64%;
    }
    @media screen and (max-width: 420px) {
      width: 68%;
    }
    h3 {
      margin: 0;
      font-weight: 700;
      font-size: 20px;
    }
    /* section where products are wrapped */
    section {
      flex: 1;
      padding-top: 10px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
  }
`;

const ASIDE_FILTRATION = styled.aside`
  width: 20%;
  height: 100%;
  @media screen and (max-width: 1082px) {
    width: 35%;
  }
  @media screen and (max-width: 420px) {
    width: 32%;
  }
  .aside-container {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 18px 12px;
    #price-h {
      font-size: 15px;
      font-weight: 700;
      margin-top: 0px;
      margin-bottom: 7px;
    }
    form {
      box-sizing: border-box;
      width: 100%;
      height: auto;
      position: relative;
      margin-bottom: 16px;
      @media screen and (max-width: 420px) {
        display: flex;
        flex-direction: column;
      }
      label {
        position: absolute;
        padding-left: 6px;
        margin-left: 3px;
        box-sizing: border-box;
        transform: translateY(-50%);
        top: 47%;
        font-size: 16px;
        line-height: 26px;
        mix-blend-mode: multiply;
        cursor: text;
        @media screen and (max-width: 595px) {
          display: none;
        }
      }
      input {
        margin-right: 5px;
        padding-left: 18px;
        box-sizing: border-box;
        border-radius: 4px;
        border: 1px solid #888c8c;
        height: 30px;
        width: 64px;
        font-size: 14px;
        font-weight: 600;
        outline: none;
        text-align: justify;

        &::placeholder {
          font-weight: 500;
        }
        &:focus {
          background-color: #f7feff;
          border: 1px solid #007185;
          outline: 3px solid #c8f3fa;
        }
        // hide default arrows on number input
        &::-webkit-inner-spin-button {
          display: none;
        }
      }
      button {
        color: black;
        margin-left: 2px;
        width: 38px;
        height: 29px;
        border-radius: 6px;
        background-color: white;
        border: 1px solid #d5d9d9;
        box-shadow: 0px 1px 7px 1px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        &:hover {
          background-color: #f7fafa;
        }
        &:focus {
          border: 1px solid #007185;
          outline: 3px solid #c8f3fa;
        }
      }
    }
    // Availability
    #availability-h {
      font-size: 15px;
      font-weight: 700;
      margin: 0;
      @media screen and (max-width: 420px) {
        font-size: 14px;
      }
    }
    #availability-link {
      text-decoration: none;
      font-size: 14px;
      color: #0f1111;
      @media screen and (max-width: 420px) {
        font-size: 12px;
      }
      &:hover {
        color: #c45500;
      }
    }
    #deals-h {
      font-size: 15px;
      font-weight: 700;
      margin-top: 16px;
      margin-bottom: 0;
      @media screen and (max-width: 420px) {
        font-size: 14px;
      }
    }
    #deals-link {
      text-decoration: none;
      font-size: 14px;
      color: #0f1111;
      @media screen and (max-width: 420px) {
        font-size: 12px;
      }
      &:hover {
        color: #c45500;
      }
    }
    /* filter by Brands */
    .filter-brands {
      display: flex;
      flex-direction: column;
      #brand-h {
        font-size: 15px;
        font-weight: 700;
        margin-top: 16px;
        margin-bottom: 0;
        @media screen and (max-width: 420px) {
          font-size: 14px;
        }
      }
      label {
        max-width: fit-content;
        font-size: 14px;
        line-height: 21px;
        color: #0f1111;
        cursor: pointer;
        @media screen and (max-width: 420px) {
          font-size: 12px;
        }
        &:hover {
          color: #c45500;
        }
        // input
        input[type="checkbox"] {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          width: 14px;
          height: 14px;
          margin: 0 4px 0 0;
          background-color: #ffffff;
          border: 1px solid #888c8c;
          position: relative;
          cursor: pointer;
          &:checked {
            background-color: #017286;
            color: white;
          }
          &:checked::after {
            content: "✔";
            position: absolute;
            color: white;
            transform: translate(-50%, -50%);
            top: 46%;
            left: 50%;
            font-size: 10px;
            font-weight: 700;
          }
        }
      }
    }
  }
`;

const CategorizedProdsArea = () => {
  
  const { categoryId } = useParams();
  const navigate = useNavigate();
  // PAGINATION
  const [page, setPage] = React.useState(1);
  const handleChange = (_event, value) => {
  // updating the URL with the new page number
  searchParams.set("pageNumber", value);
  navigate(`/CategorizedProds/${categoryId}?${searchParams.toString()}`);
  setPage(value);
    window.scrollTo({ top: 0, behaviour: "regular" });
  };
  // -------------------------------------------------

  // PRICE FILTER
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  // a new params object to handle query parameters from the url
  const searchParams = new URLSearchParams(useLocation().search);
  const minPriceFromUrl = searchParams.get("minPrice") || "";
  const maxPriceFromUrl = searchParams.get("maxPrice") || "";
  const selectedBrandFromUrl = searchParams.get("brandName") || "";

  const handlePriceSubmit = (e) => {
    e.preventDefault();

    const minPriceParam = minPrice || "";
    const maxPriceParam = maxPrice || "";
    const brandParam = selectedBrand || "";

    navigate(
      `/CategorizedProds/${categoryId}?minPrice=${minPriceParam}&maxPrice=${maxPriceParam}&brandName=${brandParam}&pageNumber=${page}`
    );
  };

  const dispatch = useDispatch();
  const productsByCategory = useSelector(
    (state) => state.products.productsByCategory
  );

  useEffect(() => {
    dispatch(
      fetchProductsByCategoryId({
        categoryId,
        minPrice: minPriceFromUrl,
        maxPrice: maxPriceFromUrl,
        brandName: selectedBrandFromUrl,
        pageNumber: page,
      })
    );
  }, [
    categoryId,
    minPriceFromUrl,
    maxPriceFromUrl,
    selectedBrandFromUrl,
    page,
    dispatch,
  ]);

  // BRANDNAME
  const [selectedBrand, setSelectedBrand] = useState("");

  const handleBrandChange = (e) => {
    const brandName = e.target.value;

    // toggle selectedBrand state based on the checkbox value
    setSelectedBrand(selectedBrand === brandName ? "" : brandName);

    // getting the brandName to use when dispatching the action
    const selectedBrandForDispatch =
      selectedBrand === brandName ? "" : brandName;

    // fetch products based on the selected brand (selectedBrandForDispatch)
    dispatch(
      fetchProductsByCategoryId({
        categoryId,
        minPrice: minPriceFromUrl,
        maxPrice: maxPriceFromUrl,
        brandName: selectedBrandForDispatch,
        pageNumber: page,
      })
    );
    // setting the search params one by one
    searchParams.set("minPrice", minPriceFromUrl);
    searchParams.set("maxPrice", maxPriceFromUrl);
    searchParams.set("brandName", selectedBrandForDispatch);
    searchParams.set("pageNumber", page);
    navigate(`/CategorizedProds/${categoryId}?${searchParams.toString()}`);
  };

  // setting unique brand names
  const uniqueBrandNames = [
    ...new Set(productsByCategory.map((product) => product.brand)),
  ];

  useEffect(() => {
    // reset selectedBrand when the categoryId changes
    setSelectedBrand("");
  }, [categoryId]);

  useEffect(() => {
    // checking if "brandName" parameter is in the URL, if it is, set it
    if (selectedBrandFromUrl) {
      setSelectedBrand(selectedBrandFromUrl);
    }
  }, [selectedBrandFromUrl]);

  return (
    <CATEGORIZED_PRODS_AREA>
      <ASIDE_FILTRATION>
        <div className="aside-container">
          {/* Filter by Price */}
          <h4 id="price-h">Price</h4>
          <form onSubmit={handlePriceSubmit}>
            <label id="f-label" htmlFor="minPrice">
              $
            </label>
            <input
              placeholder="Min"
              type="number"
              id="minPrice"
              value={minPrice}
              onChange={handleMinPriceChange}
            />

            <label id="s-label" htmlFor="maxPrice">
              $
            </label>
            <input
              placeholder="Max"
              type="number"
              id="maxPrice"
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
            <button type="submit">Go</button>
          </form>
          {/* filter by Availability */}
          <h4 id="availability-h">Availability</h4>
          <a id="availability-link" href="#">
            Include out of Stock
          </a>
          <h4 id="deals-h">Deals & Discounts</h4>
          <a id="deals-link" href="#">
            All Discounts
          </a>
          <br />
          <a id="deals-link" href="#">
            Today's Deals
          </a>
          <br />
          {/* filter by Brands */}
          <div className="filter-brands">
            <h4 id="brand-h">Brand</h4>
            {uniqueBrandNames.map((brandName, _index) => (
              <label key={brandName} htmlFor={brandName}>
                <input
                  id={brandName}
                  type="checkbox"
                  value={brandName}
                  checked={selectedBrand === brandName}
                  onChange={handleBrandChange}
                />
                {brandName}
              </label>
            ))}
          </div>
        </div>
      </ASIDE_FILTRATION>
      <main className="right-side-prods">
        <h3>Results</h3>
        <section>
          <Suspense fallback={<div className="loading-bright"></div>}>
            {productsByCategory.map((product, _index) => (
              <CategorizedProdBox key={product.id} product={product} />
            ))}
          </Suspense>
        </section>
        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          <Pagination
            count={5}
            page={page}
            size="medium"
            shape="rounded"
            variant="outlined"
            onChange={handleChange}
          />
        </Box>
      </main>
    </CATEGORIZED_PRODS_AREA>
  );
};

export default CategorizedProdsArea;
