import { useState } from "react";
import styled from "styled-components";
import amazon_credit_cards from "../../assets/imgs/amazon-credit-cards.png";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const CHECKOUT_SECTION = styled.main`
  margin: 0 auto;
  width: 82%;
  height: auto;
  display: flex;
  justify-content: space-between;
  gap: 4px;
  @media screen and (max-width: 768px) {
    width: 98%;
    margin: unset;
  }
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }

  .accordion {
    width: 70%;
    height: 100%;
    @media screen and (max-width: 576px) {
      width: 100%;
    }
  }

  .right-aside {
    width: 29%;
    @media screen and (max-width: 576px) {
      width: 100%;
      margin-block: 0.5rem;
      /* mb 8px */
    }
    & .aside-container {
      margin-top: 2.938rem;
      /* mt 47px */
      position: sticky;
      top: 0.375rem;
      /* t 6px */
      border: 1px solid #d5d9d9;
      border-radius: 7px;
      width: 100%;
      height: 8.75rem;
      /* h 140px */
      box-sizing: border-box;
      padding: 0.625rem 0.75rem;
      /* 10px 12px */
      @media screen and (max-width: 768px) {
        height: auto;
      }
      @media screen and (max-width: 576px) {
        margin: 0;
      }
      & h3 {
        margin: 0;
        @media screen and (max-width: 768px) {
          font-size: 15px;
        }
      }
      & .divider {
        width: 100%;
        height: 1px;
        background-color: #d5d9d9;
        margin-block: 14px;
      }
      & span {
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        color: #b12704;
        @media screen and (max-width: 768px) {
          font-size: 15px;
        }
      }
      & button {
        color: black;
        margin-top: 0.625rem;
        /* mt 10px */
        width: 100%;
        height: 1.875rem;
        /* h: 30px */
        background-color: #ffd814;
        border: 1px solid transparent;
        box-sizing: border-box;
        padding: 0.375rem 0.875rem;
        /* 6px, 14px */
        font-weight: 700;
        border-radius: 6px;
        cursor: pointer;
        &:focus {
          border: 1px solid #016e81;
          outline: 3px solid #c6f1f8;
        }
        @media screen and (max-width: 768px) {
          font-size: 12px;
          height: auto;
        }
      }
    }
  }

  .accordion-item {
    margin-bottom: 1.125rem;
    /* mb: 18px */
    height: auto;
  }

  .accordion-h {
    font-size: 18px;
    font-weight: 700;
    line-height: 38px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      font-size: 16px;
      margin-left: 0.25rem;
      // ml 4px
    }
  }

  .accordion-content {
    height: auto;
    margin-top: 0.625rem;
    /* mt 10px */
    margin-left: 0.875rem;
    /* ml 14px */
    padding-left: 1.125rem;
    /* pl 18px */
    padding-bottom: 0.625rem;
    /* pb 10px */
    border: 1px solid #d5d9d9;
    border-radius: 8px;
  }
  .shipping-address {
    width: 100%;
    height: auto;
    h3 {
      margin-bottom: 0;
      padding-bottom: 4px;
      border-bottom: 1px solid #bbbfbf;
      width: 97%;
    }
    /* label country/region */
    .label-type-one {
      display: block;
      padding-block: 0.25rem;
      /* pb 4px */
      font-size: 14px;
      font-weight: 700;
    }
    /* select */
    #country {
      width: 97%;
      height: 1.938rem;
      /* h 31px */
      border-radius: 6px;
      background-color: #f0f2f2;
      border: 1px solid #d0d4d4;
      text-align: justify;
      padding-left: 0.75rem;
      /* pl 12px */
      &:hover {
        cursor: pointer;
        background-color: #e0e0e0;
      }
      &:focus {
        border: 1px solid #016e81;
        outline: 3px solid #c6f1f8;
      }
      & option {
        background-color: #f3f3f3;
        &:hover {
          border: 1px solid green;
        }
      }
    }
    .input-type-one {
      width: 55%;
      height: 1.625rem;
      /* h 26px */
      border-radius: 3px;
      border: 1px solid #888c8c;
      text-align: justify;
      padding-left: 0.438rem;
      /* pl 7px */
      &:focus {
        border: 1px solid #016e81;
        outline: 3px solid #c6f1f8;
        background-color: #f7feff;
      }
    }
    #number-info {
      display: block;
      font-size: 12px;
      line-height: 20px;
      font-weight: 500;
    }
    .label-type-two {
      display: block;
      padding-top: 1rem;
      /* pt 16px */
      padding-bottom: 0.25rem;
      /* pb 4px */
      font-size: 14px;
      font-weight: 700;
    }
    .input-type-two {
      margin-block: 0.125rem;
      /* mb: 2px */
      width: 55%;
      height: 1.625rem;
      /* h: 26px */
      border-radius: 3px;
      border: 1px solid #888c8c;
      text-align: justify;
      padding-left: 0.438rem;
      /* pl: 7px */
      &:focus {
        border: 1px solid #016e81;
        outline: 3px solid #c6f1f8;
        background-color: #f7feff;
      }
    }
    .city-state-zip {
      display: flex;
      .city {
        width: 50%;
      }
      .state {
        width: 23%;
        margin-right: 0.438rem;
        /* mr: 7px */
      }
      .zip {
        width: 23%;
      }
      .input-type-three {
        margin-block: 0.125rem;
        /* mb 2px */
        width: 90%;
        height: 1.625rem;
        /* h: 26px */
        border-radius: 3px;
        border: 1px solid #888c8c;
        text-align: justify;
        padding-left: 0.438rem;
        /* pl 7px */
        &:focus {
          border: 1px solid #016e81;
          outline: 3px solid #c6f1f8;
          background-color: #f7feff;
        }
      }
    }
    .use-address {
      height: 2.813rem;
      /* h: 45px */
      button {
        color: black;
        margin-top: 0.5rem;
        /* mt 8px */
        background-color: #ffd814;
        border: 1px solid transparent;
        box-sizing: border-box;
        padding: 0.375rem 0.875rem;
        /* 6px, 14px */
        font-weight: 700;
        border-radius: 6px;
        width: 9.375rem;
        /* w 150px */
        cursor: pointer;
        &:focus {
          border: 1px solid #016e81;
          outline: 3px solid #c6f1f8;
        }
        @media screen and (max-width: 768px) {
          font-size: 12px;
        }
      }
    }
  }
`;

const PAYMENT_METHOD = styled.div`
  width: 100%;
  h3 {
    margin-bottom: 0;
    padding-bottom: 0.25rem;
    /* pb: 4px */
    border-bottom: 1px solid #bbbfbf;
    width: 97%;
  }
  .card-box {
    margin-top: 0.313rem;
    /* mt 5px */
    display: flex;
    gap: 10px;
    .card-left {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 8px;
      label {
        min-width: 6.25rem;
        /* mw: 100px */
        line-height: 32px;
        font-size: 14px;
        font-weight: 700;
      }
    }
    .card-right {
      display: flex;
      flex-direction: column;
      gap: 6px;
      input {
        margin-block: 0.125rem;
        /* mb 2px */
        width: 90%;
        height: 1.625rem;
        /* h 26px */
        border-radius: 3px;
        border: 1px solid #888c8c;
        text-align: justify;
        padding-left: 0.438rem;
        /* pl 7px */
        &:focus {
          border: 1px solid #016e81;
          outline: 3px solid #c6f1f8;
          background-color: #f7feff;
        }
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
        }
      }
      .cvv-security-input {
        margin-block: 0.125rem;
        /* mb: 2px */
        width: 32%;
        height: 1.625rem;
        /* h 26px */
        border-radius: 3px;
        border: 1px solid #888c8c;
        text-align: justify;
        padding-left: 0.438rem;
        /* pl 7px */
        -webkit-appearance: none;
        -moz-appearance: textfield;
        appearance: textfield;
        &:focus {
          border: 1px solid #016e81;
          outline: 3px solid #c6f1f8;
          background-color: #f7feff;
        }
      }
      .select-month {
        width: 4.375rem;
        /* w 70px */
        height: 1.938rem;
        /* h 31px */
        border-radius: 6px;
        background-color: #f0f2f2;
        border: 1px solid #d0d4d4;
        text-align: justify;
        padding-left: 0.75rem;
        /* pl 12px */
        box-shadow: 1.5px 1.5px 5px 0px rgba(0, 0, 0, 0.2);
        &:hover {
          cursor: pointer;
          background-color: #e0e0e0;
        }
        &:focus {
          border: 1px solid #016e81;
          outline: 3px solid #c6f1f8;
        }
        & option {
          background-color: #f3f3f3;
          &:hover {
            border: 1px solid green;
          }
        }
      }
    }
    .select-year {
      width: 5.625rem;
      /* w 90px */
      height: 1.938rem;
      /* h 31px */
      border-radius: 6px;
      background-color: #f0f2f2;
      border: 1px solid #d0d4d4;
      text-align: justify;
      padding-left: 0.75rem;
      /* pl 12px */
      margin-left: 0.75rem;
      box-shadow: 1.5px 1.5px 5px 0px rgba(0, 0, 0, 0.2);
      &:hover {
        cursor: pointer;
        background-color: #e0e0e0;
      }
      &:focus {
        border: 1px solid #016e81;
        outline: 3px solid #c6f1f8;
      }
      & option {
        background-color: #f3f3f3;
        &:hover {
          border: 1px solid green;
        }
      }
    }
    button {
      color: black;
      margin-top: 0.5rem;
      /* mt: 8px */
      background-color: #ffd814;
      border: 1px solid transparent;
      box-sizing: border-box;
      padding: 0.375rem 0.875rem;
      /* 6px, 14px */
      font-weight: 700;
      border-radius: 6px;
      width: 12.5rem;
      /* w 200px */
      cursor: pointer;
      &:focus {
        border: 1px solid #016e81;
        outline: 3px solid #c6f1f8;
      }
      @media screen and (max-width: 768px) {
        font-size: 12px;
      }
    }
    .credit-cards-imgs {
      span {
        padding-left: 0.313rem;
        /* pl 5px */
        font-size: 14px;
        font-weight: 600;
      }
      figure {
        img {
          width: 100%;
        }
      }
      @media screen and (max-width: 768px) {
        span {
          display: none;
        }
        display: none;
      }
    }
  }
`;

function AccordionItem({ title, content, initiallyOpen }) {
  const [isOpen, setIsOpen] = useState(initiallyOpen || false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <span className="accordion-h" onClick={toggleAccordion}>
        {title}
      </span>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
}

// 1. Choose a shipping address
function ShippingAdress() {
  const [selectedCountry, setSelectedCountry] = useState("");

  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Georgia",
    "Ukraine",
    "Italy",
    "France",
  ];

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="shipping-address">
      <h3>Your addresses</h3>
      {/*--- Country/Region --- */}
      <label className="label-type-one" htmlFor="country">
        Country/Region
      </label>
      <select
        id="country"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="">Select a country</option>
        {countries.map((country, index) => (
          <option id="options" key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
      {/*--- Full Name, Number inputs --- */}
      <label className="label-type-one" htmlFor="fullName">
        Full name(First and Last name)
      </label>
      <input className="input-type-one" type="text" id="fullName" />
      <label className="label-type-one" htmlFor="number">
        Phone number
      </label>
      <input className="input-type-one" type="number" id="number" />
      <span id="number-info">May be used to assist delivery</span>
      {/*--- Address inputs --- */}
      <label className="label-type-two" htmlFor="address">
        Address
      </label>
      <input
        className="input-type-two"
        type="text"
        id="address"
        placeholder="Street address or P.O. Box"
      />
      <input
        className="input-type-two"
        type="text"
        id="additionalAddress"
        placeholder="Apt, suite, unit, building, floor, etc."
      />
      {/* City, State, Zip */}
      <div className="city-state-zip">
        <div className="city">
          <label className="label-type-two" htmlFor="city">
            City
          </label>
          <input className="input-type-three" type="text" id="city" />
        </div>
        <div className="state">
          <label className="label-type-two" htmlFor="state">
            State
          </label>
          <input className="input-type-three" type="text" id="state" />
        </div>
        <div className="zip">
          <label className="label-type-two" htmlFor="zip">
            Zip
          </label>
          <input className="input-type-three" type="number" id="zip" />
        </div>
      </div>
      <div className="use-address">
        <button>Use this address</button>
      </div>
    </div>
  );
}

// 2. Payment method
function PaymentMethod() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  const years = [
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
  ];
  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const [cardNumber, setCardNumber] = useState("");

  const handleCardNumberChange = (e) => {
    let input = e.target.value;
    input = input.replace(/\D/g, ""); // remove non-digit characters
    // add spaces after every 4 characters
    let formattedValue = "";
    for (let i = 0; i < input.length; i += 4) {
      formattedValue += input.slice(i, i + 4) + " ";
    }
    setCardNumber(formattedValue.trim());
  };

  const [cardName, setCardName] = useState("");

  const handleNameChange = (e) => {
    let input = e.target.value;
    let lettersAndSpacesOnly = input.replace(/[^A-Za-z ]/g, "");
    const upperCaseInput = lettersAndSpacesOnly.toUpperCase();
    setCardName(upperCaseInput);
  };

  return (
    <PAYMENT_METHOD>
      <h3>Your credit card</h3>
      <div className="card-box">
        <div className="card-left">
          <label htmlFor="cardNumber">Card Number</label>
          <label htmlFor="name">Name on card</label>
          <label htmlFor="exp">Exp. date</label>
          <label htmlFor="security">(CVV/CVC)</label>
        </div>
        <div className="card-right">
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            inputMode="numeric"
            onChange={handleCardNumberChange}
            maxLength="24"
          />
          <input
            type="text"
            id="name"
            value={cardName}
            onChange={handleNameChange}
          />
          <div className="card-selects">
            <select
              className="select-month"
              id="exp"
              value={selectedMonth}
              onChange={handleMonthChange}
            >
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <select
              className="select-year"
              id="expYear"
              value={selectedYear}
              onChange={handleYearChange}
            >
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <input
            className="cvv-security-input"
            type="password"
            id="security"
            maxLength="4"
          />
          <button>Use this payment method</button>
        </div>
        <div className="credit-cards-imgs">
          <span>Amazon accepts all major credit and debit cards:</span>
          <figure>
            <img src={amazon_credit_cards} alt="credit cards" />
          </figure>
        </div>
      </div>
    </PAYMENT_METHOD>
  );
}

function CheckoutSection() {
  // data from redux
  const sum = useSelector((state) =>
    state.cart.productsInCart
      .reduce((acc, item) => acc + item.price, 0)
      .toFixed(2)
  );
  const buyNowPrice = useSelector((state) => state.products.selectedProduct.price);
  const location = useLocation();

  return (
    <CHECKOUT_SECTION>
      <div className="accordion">
        <AccordionItem
          title="1 Choose a shipping address"
          content={<ShippingAdress />}
          initiallyOpen={true}
        />
        <AccordionItem
          title="2 Payment method"
          content={<PaymentMethod />}
          initiallyOpen={true}
        />
      </div>
      <aside className="right-aside">
        <div className="aside-container">
          <h3>Order Summary</h3>
          <div className="divider"></div>
          <span>Order total: {location.pathname === "/buy-now" ? buyNowPrice : sum}$</span>
          <button>Confirm Payment</button>
        </div>
      </aside>
    </CHECKOUT_SECTION>
  );
}

export default CheckoutSection;
