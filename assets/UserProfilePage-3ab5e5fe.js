import{s as f,a as x,c as h,j as e,e as n}from"./index-2666786e.js";const g="/amazon-ecommerce-pro/assets/userprofile-d2a1bbcc.png",b=f.main`
  box-sizing: border-box;
  padding-block: 5.5rem;
  /* pb 88px */
  width: 100%;
  height: auto;
  display: flex;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
  .user-profile-left {
    box-sizing: border-box;
    padding-right: 1.875rem;
    /* pr 30px */
    width: 40%;
    height: 100%;
    .img-box {
      width: fit-content;
      float: right;
      display: flex;
      flex-direction: column;
      align-items: center;
      figure {
        width: 6.25rem;
        height: 6.25rem;
        /* 100px */
        margin-bottom: 0.625rem;
        /* mb 10px */
        img {
          float: left;
          width: 100%;
          border-radius: 50%;
          box-shadow: 0 0 9px rgba(0, 0, 0, 0.7);
        }
      }
      span {
        font-weight: 600;
      }
    }
    @media screen and (max-width: 576px) {
      padding: 0;
      display: flex;
      justify-content: center;
    }
  }
  .user-profile-right {
    width: 60%;
    height: 100%;
    box-sizing: border-box;
    padding-left: 1.875rem;
    /* pl 30px */
    @media screen and (max-width: 576px) {
      padding-left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h2 {
      margin-top: 0;
      margin-bottom: 3.125rempx;
      /* mb 50px */
      font-size: 28px;
      @media screen and (max-width: 576px) {
        margin-bottom: 0.625rem;
        /* mb 10px */
      }
    }
    span {
      font-style: italic;
      font-size: 13px;
      font-weight: 500;
      display: block;
      margin-bottom: 0.625rem;
    }
    form {
      max-width: 15.625rem;
      /* 250px */
      display: flex;
      flex-direction: column;
      .empty-input {
        border: 1px solid red;
        outline: 3px solid #ffe3e3;
      }
      label {
        font-size: 14px;
        font-weight: 500;
      }
      input {
        margin-bottom: 7px;
        border-radius: 0.25rem;
        /* br 4px */
        height: 1.5rem;
        /* h 24px */
        border: none;
        border: 1px solid #949494;
        text-align: justify;
        padding-left: 0.5rem;
        &:focus {
          background-color: #f7feff;
        }
        &:focus-visible {
          border: 1px solid #007185;
          outline: 3px solid #c8f3fa;
        }
      }
      button {
        color: black;
        height: 1.5rem;
        /* h 24px */
        font-weight: 600;
        margin-top: 0.5rem;
        /* 8px */
        border-radius: 0.5rem;
        /* 8px */
        outline: none;
        border: none;
        cursor: pointer;
        background-color: #ffd814;
        &:hover {
          background-color: #e7c411;
        }

        &:focus {
          outline: 1px solid #0bafc9;
        }
      }
      span {
        text-align: center;
        color: red;
      }
    }
  }
`,w=()=>{const d=x(),{user:t,loading:m,error:p}=h(r=>r.user),u=r=>{r.preventDefault();const{userName:l,email:s,newPassword:o}=r.target;if(!l.value||!s.value||!o.value){alert("Please fill in all the fields.");return}if(!s.value.includes("@")){alert("Please enter a valid email address.");return}if(o.value.length<6){alert("Password must be at least 6 characters long.");return}const c={id:t.nameid,username:l.value,email:s.value,newPassword:o.value};d(n(c)).then(i=>{if(n.fulfilled.match(i))window.location.reload();else throw new Error("Error while updating user. ")}).catch(i=>{console.log(i),alert(i)})},a=r=>r.value===""?(r.classList.add("empty-input"),!1):(r.classList.remove("empty-input"),!0);return e.jsxs(b,{children:[e.jsx("div",{className:"user-profile-left",children:e.jsxs("div",{className:"img-box",children:[e.jsx("figure",{children:e.jsx("img",{src:g,alt:"user-profile-img"})}),e.jsx("span",{children:t.username})]})}),e.jsxs("div",{className:"user-profile-right",children:[e.jsx("h2",{children:"Your Profile"}),e.jsxs("span",{children:["You can change your profile information",e.jsx("br",{}),"(Please fill all fields)"]}),e.jsxs("form",{onSubmit:u,children:[e.jsx("label",{htmlFor:"email",children:"Email:"}),e.jsx("input",{type:"email",name:"email",id:"email",placeholder:"Enter new email",defaultValue:t.email,onBlur:r=>a(r.target)}),e.jsx("label",{htmlFor:"userName",children:"Username:"}),e.jsx("input",{type:"text",name:"userName",id:"userName",placeholder:"Enter new username",defaultValue:t.username,onBlur:r=>a(r.target)}),e.jsx("label",{htmlFor:"newPassword",children:"Old or New Password:"}),e.jsx("input",{type:"password",name:"newPassword",id:"newPassword",placeholder:"Enter new password",onBlur:r=>{a(r.target),r.target.value.length<6?r.target.classList.add("empty-input"):r.target.classList.remove("empty-input")}}),e.jsx("button",{type:"submit",children:m?"Loading...":"Update Profile Info"}),p?e.jsx("span",{children:"Error!"}):""]})]})]})},v=()=>e.jsx(w,{});export{v as default};
