import{s as h,a as f,b as g,c as m,j as e,f as b,g as u}from"./index-2666786e.js";const w=h.article`
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
`,k=({id:i,title:a,price:s,image:n})=>{const r=f(),d=g(),o=m(t=>t.user.isLoggedIn),p=()=>{if(!o){d("/sign-in");return}r(b(i)).then(()=>{r(u())}).catch(t=>{console.log(t)})},c=((t,x)=>Math.floor(Math.random()*(x-t+1))+t)(2,5),l="⭐".repeat(c);return e.jsx(w,{children:e.jsxs("div",{className:"freq-p-prod",children:[e.jsx("div",{className:"freq-p-img",children:e.jsx("a",{href:`/productPage/${i}/`,children:e.jsx("figure",{children:e.jsx("img",{src:n,alt:"frequently-purchased"})})})}),e.jsxs("div",{className:"freq-p-specs",children:[e.jsx("a",{id:"freq-p-title",href:`/productPage/${i}/`,children:a}),e.jsx("div",{className:"freq-p-rating",children:e.jsx("span",{children:l})}),e.jsxs("span",{className:"freq-p-price",children:[s,"$"]}),e.jsx("div",{className:"freq-p-btn",children:e.jsx("button",{id:"freq-add-btn",onClick:p,children:"Add to Cart"})})]})]})})};export{k as default};
