import{R as d,s,j as e,L as t}from"./index-2666786e.js";const c=s.div`
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
`,x=({product:i})=>{const r=((o,a)=>Math.floor(Math.random()*(a-o+1))+o)(2,5),n="⭐".repeat(r);return e.jsxs(c,{children:[e.jsx(t,{to:`/ProductPage/${i.id}/`,children:e.jsx("figure",{children:e.jsx("img",{src:i.images[0],alt:i.name})})}),e.jsxs("div",{className:"under-image-info",children:[e.jsx(t,{id:"prod-title",to:`/ProductPage/${i.id}/`,children:i.name}),e.jsx("div",{className:"stars",children:e.jsx("span",{children:n})}),e.jsx("div",{className:"price",children:e.jsxs(t,{id:"prod-title",to:`/ProductPage/${i.id}/`,children:[e.jsx("span",{id:"price-at-moment",children:i.price}),i.oldPrice&&e.jsxs("span",{id:"price-before",children:["List: ",e.jsx("span",{children:i.oldPrice})]})]})}),e.jsx("span",{id:"shipping-to",children:"Ships to Georgia"})]})]})},p=d.memo(x);export{p as default};
