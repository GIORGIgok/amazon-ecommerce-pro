import{s as m,u as g,c as x,j as e,L as v,r as c}from"./index-2666786e.js";import{a as A}from"./am-logo-transparent-821c7e26.js";const C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAVCAYAAABPPm7SAAAAvklEQVQ4y2NgwAJmzpypC8TrgfgdCM+aNWs1EGszEAOAGryB+AcQ/wfiW0B8G8r+PmPGDC9CmpWB+DMQ/wPibJg4UGMR1JAv06ZNU8JnwDyQQqCGJVjkVkANmY3PgJcgRbNnz3ZCl5s+fboD1ICn+AwAKfg/Z84ceXQ5kBhMnqABQCyHRU4OqwFAp1kDBS8jaSYWXwRGrRXI5ItkaIbhSwwUaIZ4Z9SAUQOoZcAnCgz4zADMENNBJQ05moF4BgDc7eAwEsfcBQAAAABJRU5ErkJggg==",z=m.header`
  width: 100%;
  height: 4.563rem;
  /* 73px */
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #dddddd;
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5046393557422969) 65%,
    rgba(235, 235, 235, 1) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5046393557422969) 65%,
    rgba(235, 235, 235, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5046393557422969) 65%,
    rgba(235, 235, 235, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ebebeb",GradientType=1);
  & .logo-box {
    width: 22%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 576px) {
      width: 25%;
    }
    & #logo {
      height: 2.438rem;
      /* h 39px */
      width: 6.563rem;
      /* w 105px */
      & img {
        width: 100%;
        text-align: center;
      }
    }
  }
  & .checkout-box {
    width: 50%;
    @media screen and (max-width: 576px) {
      width: 60%;
    }
    & h1 {
      margin: 0;
      font-weight: 400;
      text-align: center;
      @media screen and (max-width: 576px) {
        font-size: 24px;
      }
      & span {
        color: #007185;
        font-size: 28px;
        @media screen and (max-width: 576px) {
          font-size: 24px;
        }
      }
    }
  }
  & .lock-box {
    width: 28%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 576px) {
      width: 15%;
    }
    & #lock {
      height: 1.313rem;
      /* h: 21px */
      width: 1rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
`,P=()=>{const o=g(),a=x(d=>d.cart.productsInCart.length);return e.jsxs(z,{children:[e.jsx("div",{className:"logo-box",children:e.jsx("figure",{id:"logo",children:e.jsx(v,{to:"/",children:e.jsx("img",{src:A,alt:"amazon-logo"})})})}),e.jsx("div",{className:"checkout-box",children:e.jsxs("h1",{children:["Checkout ",o.pathname==="/checkout"&&e.jsxs(e.Fragment,{children:["(",e.jsx("span",{children:a}),")"]})]})}),e.jsx("div",{className:"lock-box",children:e.jsx("figure",{id:"lock",children:e.jsx("img",{src:C,alt:"lock"})})})]})},S="/amazon-ecommerce-pro/assets/amazon-credit-cards-1a0f3f21.png",F=m.main`
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
`,E=m.div`
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
`;function h({title:o,content:a,initiallyOpen:d}){const[r,i]=c.useState(d||!1),s=()=>{i(!r)};return e.jsxs("div",{className:"accordion-item",children:[e.jsx("span",{className:"accordion-h",onClick:s,children:o}),r&&e.jsx("div",{className:"accordion-content",children:a})]})}function O(){const[o,a]=c.useState(""),d=["United States","United Kingdom","Canada","Georgia","Ukraine","Italy","France"],r=i=>{a(i.target.value)};return e.jsxs("div",{className:"shipping-address",children:[e.jsx("h3",{children:"Your addresses"}),e.jsx("label",{className:"label-type-one",htmlFor:"country",children:"Country/Region"}),e.jsxs("select",{id:"country",value:o,onChange:r,children:[e.jsx("option",{value:"",children:"Select a country"}),d.map((i,s)=>e.jsx("option",{id:"options",value:i,children:i},s))]}),e.jsx("label",{className:"label-type-one",htmlFor:"fullName",children:"Full name(First and Last name)"}),e.jsx("input",{className:"input-type-one",type:"text",id:"fullName"}),e.jsx("label",{className:"label-type-one",htmlFor:"number",children:"Phone number"}),e.jsx("input",{className:"input-type-one",type:"number",id:"number"}),e.jsx("span",{id:"number-info",children:"May be used to assist delivery"}),e.jsx("label",{className:"label-type-two",htmlFor:"address",children:"Address"}),e.jsx("input",{className:"input-type-two",type:"text",id:"address",placeholder:"Street address or P.O. Box"}),e.jsx("input",{className:"input-type-two",type:"text",id:"additionalAddress",placeholder:"Apt, suite, unit, building, floor, etc."}),e.jsxs("div",{className:"city-state-zip",children:[e.jsxs("div",{className:"city",children:[e.jsx("label",{className:"label-type-two",htmlFor:"city",children:"City"}),e.jsx("input",{className:"input-type-three",type:"text",id:"city"})]}),e.jsxs("div",{className:"state",children:[e.jsx("label",{className:"label-type-two",htmlFor:"state",children:"State"}),e.jsx("input",{className:"input-type-three",type:"text",id:"state"})]}),e.jsxs("div",{className:"zip",children:[e.jsx("label",{className:"label-type-two",htmlFor:"zip",children:"Zip"}),e.jsx("input",{className:"input-type-three",type:"number",id:"zip"})]})]}),e.jsx("div",{className:"use-address",children:e.jsx("button",{children:"Use this address"})})]})}function U(){const[o,a]=c.useState(""),[d,r]=c.useState(""),i=["01","02","03","04","05","06","07","08","09","10","11","12"],s=["2024","2025","2026","2027","2028","2029","2030","2031","2032","2033","2034"],u=t=>{a(t.target.value)},b=t=>{r(t.target.value)},[f,w]=c.useState(""),y=t=>{let n=t.target.value;n=n.replace(/\D/g,"");let p="";for(let l=0;l<n.length;l+=4)p+=n.slice(l,l+4)+" ";w(p.trim())},[j,k]=c.useState(""),N=t=>{const l=t.target.value.replace(/[^A-Za-z ]/g,"").toUpperCase();k(l)};return e.jsxs(E,{children:[e.jsx("h3",{children:"Your credit card"}),e.jsxs("div",{className:"card-box",children:[e.jsxs("div",{className:"card-left",children:[e.jsx("label",{htmlFor:"cardNumber",children:"Card Number"}),e.jsx("label",{htmlFor:"name",children:"Name on card"}),e.jsx("label",{htmlFor:"exp",children:"Exp. date"}),e.jsx("label",{htmlFor:"security",children:"(CVV/CVC)"})]}),e.jsxs("div",{className:"card-right",children:[e.jsx("input",{type:"text",id:"cardNumber",value:f,inputMode:"numeric",onChange:y,maxLength:"24"}),e.jsx("input",{type:"text",id:"name",value:j,onChange:N}),e.jsxs("div",{className:"card-selects",children:[e.jsx("select",{className:"select-month",id:"exp",value:o,onChange:u,children:i.map((t,n)=>e.jsx("option",{value:t,children:t},n))}),e.jsx("select",{className:"select-year",id:"expYear",value:d,onChange:b,children:s.map((t,n)=>e.jsx("option",{value:t,children:t},n))})]}),e.jsx("input",{className:"cvv-security-input",type:"password",id:"security",maxLength:"4"}),e.jsx("button",{children:"Use this payment method"})]}),e.jsxs("div",{className:"credit-cards-imgs",children:[e.jsx("span",{children:"Amazon accepts all major credit and debit cards:"}),e.jsx("figure",{children:e.jsx("img",{src:S,alt:"credit cards"})})]})]})]})}function I(){const o=x(r=>r.cart.productsInCart.reduce((i,s)=>i+s.price,0).toFixed(2)),a=x(r=>r.products.selectedProduct.price),d=g();return e.jsxs(F,{children:[e.jsxs("div",{className:"accordion",children:[e.jsx(h,{title:"1 Choose a shipping address",content:e.jsx(O,{}),initiallyOpen:!0}),e.jsx(h,{title:"2 Payment method",content:e.jsx(U,{}),initiallyOpen:!0})]}),e.jsx("aside",{className:"right-aside",children:e.jsxs("div",{className:"aside-container",children:[e.jsx("h3",{children:"Order Summary"}),e.jsx("div",{className:"divider"}),e.jsxs("span",{children:["Order total: ",d.pathname==="/buy-now"?a:o,"$"]}),e.jsx("button",{children:"Confirm Payment"})]})})]})}export{P as C,I as a};
