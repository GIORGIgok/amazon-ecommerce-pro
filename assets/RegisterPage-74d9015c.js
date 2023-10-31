import{s as m,a as R,b as E,c as b,r as l,j as e,L as g,d as w}from"./index-2666786e.js";import{a as z}from"./am-logo-transparent-821c7e26.js";import{A as C}from"./AuthRegLegal-3568dcd1.js";const S=m.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  figure {
    img {
      margin-block: 0.625rem;
      /* 10px */
    }
  }
`,F=m.div`
  height: 33rem;
  width: 22.5rem;
  text-align: center;
  margin-bottom: 2rem;
  @media screen and (max-width: 576px) {
    width: 19rem;
  }
  main {
    width: 100%;
    height: 100%;
    border: 1px solid #dddddd;
    border-radius: 0.5rem;
    /* 8px */

    .register-box-container {
      width: calc(100% - 3.5rem);
      /* 100% - 56px */
      height: 84%;
      padding-inline: 1.75rem;
      /* 28px */
    }

    #reg-main-error {
      display: block;
      float: right;
      padding-top: 26px;
      font-size: 12px;
      color: red;
    }

    h2 {
      display: block;
      float: left;
      margin-top: 0.813rem;
      /* 13px */
      margin-bottom: 0;
      font-weight: 400;
      font-size: 1.75rem;
      /* 28px */
    }
    form {
      float: left;
      #reg-label-txt {
        float: left;
        text-align: left;
        font-size: 0.875rem;
        /* 14px */
        font-weight: 700;
        height: 100%;
        width: 100%;
        padding-top: 15px;
      }

      .reg-input {
        float: left;
        width: 97%;
        height: 1.625rem;
        /* height 26px */
        margin-top: 0.2rem;
        /* mt 3.2px */
        border-radius: 2px;
        border: 1px solid #949494;
        text-align: justify;
        padding-left: 8px;
        &:focus {
          background-color: #f7feff;
        }
        &:focus-visible {
          border: 1px solid #007185;
          outline: 3px solid #c8f3fa;
        }
      }
      /* conditional rendering of input */
      .reg-input.invalid {
        border: 1px solid #cc0c39;
        outline: 3px solid #ffe3e3;
      }

      #register-submit {
        float: left;
        color: black;
        margin-top: 0.813rem;
        /* mt 13px */
        width: 100%;
        height: 1.875rem;
        /* height 30px */
        border-radius: 0.5rem;
        /* 8px */
        outline: none;
        border: none;
        cursor: pointer;
        background-color: #ffd814;
        font-weight: 590;
        font-size: 0.813rem;
        /* 13px */

        &:hover {
          background-color: #e7c411;
        }

        &:focus {
          outline: 1px solid #0bafc9;
        }
      }
    }
    #reg-pass-warn {
      float: left;
      margin-top: 0.25rem;
      /* mt 4px */
      font-size: 0.75rem;
      /* fs 12px */
      color: #2b2b2b;
    }

    #reg-warning {
      float: left;
      text-align: left;
      margin-block: 1.3rem;
      /* mt 18px */
      font-size: 0.75rem;
      /* 12.5px */

      a {
        text-decoration: none;
        color: #0066c0;

        &:hover {
          text-decoration: underline;
          color: #c7511f;
        }
      }
    }
    .reg-already-have-acc {
      width: 100%;
      height: 4.563rem;
      /* h 73px */
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      font-size: 0.813rem;
      /* fs 13px */
      background: rgb(236, 236, 236);
      background: -moz-radial-gradient(
        circle,
        rgba(236, 236, 236, 1) 0%,
        rgba(248, 248, 248, 0.5046218316428134) 8%
      );
      background: -webkit-radial-gradient(
        circle,
        rgba(236, 236, 236, 1) 0%,
        rgba(248, 248, 248, 0.5046218316428134) 8%
      );
      background: radial-gradient(
        circle,
        rgba(236, 236, 236, 1) 0%,
        rgba(248, 248, 248, 0.5046218316428134) 8%
      );
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
      @media screen and (max-width: 576px) {
        height: 3.5rem;
      }
    }
    #reg-already-txt {
      margin-left: 14px;
      font-weight: 600;
      @media screen and (max-width: 576px) {
        font-size: 12px;
      }
    }
    .reg-already-links {
      text-decoration: none;
      color: #0066c0;
      &:hover {
        color: #c45500;
        text-decoration: underline;
      }
    }
  }
`,A=m.div`
  float: left;
  width: 100%;
  height: 0.063rem;
  /* 1px */
  background: linear-gradient(
    to right,
    transparent 0%,
    #ccc 50%,
    #ccc 50%,
    transparent 100%
  );
`,L=()=>{const j=R(),v=E(),p=b(i=>i.user.loading),s=b(i=>i.user.error),[n,y]=l.useState({userName:"",email:"",password:"",rePassword:""}),[P,k]=l.useState(void 0),[h,x]=l.useState(!0),[d,u]=l.useState({userName:!1,email:!1,password:!1,rePassword:!1}),o=i=>{const{name:a,value:t}=i.target;y(r=>({...r,[a]:t})),a==="password"&&k(t.length),a==="rePassword"&&t!==n.password?x(!1):x(!0),t.trim()===""?u(r=>({...r,[a]:!0})):u(r=>({...r,[a]:!1}))},N=async i=>{i.preventDefault();const{userName:a,email:t,password:r,rePassword:f}=n;if(!t.includes("@")){alert("Please enter a valid email address containing '@...");return}if(!a.trim()||!t.trim()||!r.trim()||!f.trim()){alert("Please fill in all fields.");return}if(r.length<6){alert("Password must be at least 6 characters.");return}if(r!==f){alert("Passwords do not match.");return}j(w({userName:a,email:t,password:r})).then(c=>{if(w.fulfilled.match(c))v("/sign-in");else throw new Error("Registration failed")}).catch(c=>{console.error("Registration Error:",c),alert("Error while registering.")})};return e.jsxs(S,{children:[e.jsx(g,{to:"/",children:e.jsx("figure",{children:e.jsx("img",{src:z,alt:"Amazon logo"})})}),e.jsx(F,{children:e.jsxs("main",{children:[e.jsxs("div",{className:"register-box-container",children:[e.jsx("h2",{children:"Create account"}),s&&e.jsx("span",{id:"reg-main-error",children:"Try again..."}),e.jsxs("form",{onSubmit:N,children:[e.jsx("label",{htmlFor:"reg-input",children:e.jsx("span",{id:"reg-label-txt",children:"Username"})}),e.jsx("input",{className:`reg-input ${d.userName||s?"invalid":""}`,id:"reg-input",type:"text",name:"userName",placeholder:"Type username",value:n.userName,autoComplete:"userName",onChange:o,autoFocus:!0}),e.jsx("label",{htmlFor:"email",children:e.jsx("span",{id:"reg-label-txt",children:"E-mail"})}),e.jsx("input",{className:`reg-input ${d.email||s?"invalid":""}`,id:"email",name:"email",type:"email",value:n.email,autoComplete:"email",onChange:o}),e.jsx("label",{htmlFor:"password",children:e.jsx("span",{id:"reg-label-txt",children:"Password"})}),e.jsx("input",{className:`reg-input ${P<6||!h||s?"invalid":""}`,id:"password",type:"password",name:"password",placeholder:"At least 6 characters",value:n.password,onChange:o}),e.jsxs("span",{id:"reg-pass-warn",children:[" ","Passwords must be at least 6 characters."]}),e.jsx("label",{htmlFor:"rePassword",children:e.jsx("span",{id:"reg-label-txt",children:"Re-enter password"})}),e.jsx("input",{className:`reg-input ${!h||d.rePassword||s?"invalid":""}`,id:"rePassword",type:"password",name:"rePassword",onChange:o}),e.jsx("button",{id:"register-submit",type:"submit",disabled:p,children:p?"Registering...":"Register"})]}),e.jsxs("span",{id:"reg-warning",children:["By creating an account, you agree to Amazon's"," ",e.jsx("a",{href:"/",children:"Conditions of Use"})," and"," ",e.jsx("a",{href:"/",children:"Privacy Notice."})]})]}),e.jsx(A,{}),e.jsxs("div",{className:"reg-already-have-acc",children:[e.jsxs("span",{id:"reg-already-txt",children:["Already have an account?"," ",e.jsx(g,{className:"reg-already-links",to:"/sign-in",children:"Sign in"})]}),e.jsxs("span",{id:"reg-already-txt",children:["Buying for work?"," ",e.jsx(g,{className:"reg-already-links",to:"/Register",children:"Create a free business account"})]})]})]})}),e.jsx(C,{})]})};export{L as default};
