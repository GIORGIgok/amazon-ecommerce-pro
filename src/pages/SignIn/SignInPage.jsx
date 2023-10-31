import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import am_transparent_logo from "../../assets/imgs/am-logo-transparent.png";
import AuthRegFooter from "../../components/Common/AuthRegFooter/AuthRegLegal";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/user/userSlice";

const SIGN_IN_OUTER_CONTAINER = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SIGN_IN_WRAPPER = styled.div`
  min-height: 28rem;
  width: 22.5rem;
  text-align: center;
  /* amazon logo img */
  @media screen and (max-width: 576px) {
    width: 19rem;
  }
  img {
    margin-block: 0.625rem;
    /* 10px */
  }
  main {
    width: 100%;
    height: 62%;
    border: 1px solid #dddddd;
    border-radius: 0.5rem;
    /* 8px */

    .sign-box-container {
      width: calc(100% - 3.5rem);
      /* 100% - 56px */
      height: 100%;
      padding-inline: 1.75rem;
      /* 28px */
    }

    h2 {
      display: block;
      float: left;
      margin-block: 0.813rem;
      /* 13px */
      font-weight: 400;
      font-size: 1.75rem;
      /* 28px */
    }
    p {
      font-size: 12px;
      margin-top: 1.625rem;
      /* mt 26px */
      float: right;
      color: red;
    }

    form {
      float: left;
      label {
        float: left;
        text-align: left;
        margin-top: 0.25rem;
        /* mt 4px */
        font-size: 0.875rem;
        /* 14px */
        font-weight: 700;
        height: 100%;
        width: 100%;
      }
      input {
        float: left;
        width: 97%;
        height: 1.625rem;
        /* height 26px */
        margin-top: 0.125rem;
        /* mt 2px */
        border-radius: 2px;
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
      .invalid-input {
        border: 1px solid #cc0c39;
        outline: 3px solid #ffe3e3;
      }
      button {
        float: left;
        color: black;
        margin-top: 0.813rem;
        /* mt 13px */
        width: 100.5%;
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

    #auth-warning {
      float: left;
      text-align: left;
      margin-top: 1.125rem;
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

    .need-help {
      float: left;
      margin-top: 0.438rem;
      /* 7px */
      width: auto;
      height: auto;
      font-size: 0.813rem;
      /* 13px */
      text-align: left;
      display: block;

      /* help dropdown-txt */
      span {
        display: block;
        color: #0066c0;
        cursor: pointer;

        &:hover {
          color: #c45500;
          text-decoration: underline;
        }
      }

      .help-options {
        display: block;
        a {
          display: block;
          color: #0066c0;
          text-decoration: none;
          &:hover {
            color: #c45500;
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

const CREATE_ACC = styled.div`
  width: 100%;
  height: 6.563rem;
  /* 105px */

  /* new to amazon? */
  div {
    position: relative;
    padding-top: 1px;
    width: 100%;
    height: 20%;

    &:after {
      content: "";
      position: absolute;
      z-index: 1;
      width: 100%;
      left: 0;
      top: 1.375rem;
      /* t 22px */
      height: 1px;
      background-color: #e7e7e7;
    }
  }

  h5 {
    font-size: 0.75rem;
    /* f 12px */
    font-weight: 600;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    margin: 0;
    top: 0.813rem;
    /* t 13px */
    /* lft 130px */
    z-index: 2;
    color: #767676;
    background-color: #ffffff;
    padding-inline: 0.313rem;
    /* 5px */
  }
/* create acc */
  a {
    position: absolute;
    font-size: 0.938rem;
    /* 15px */
    font-weight: 600;
    color: #0f1111;
    top: 3.125rem;
    /* t 50px */
    left: 0px;
    text-decoration: none;
    padding: 0.313rem 5rem;
    /* p 5px 80px */
    border: 1px solid #d5d9d9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    @media screen and (max-width: 576px) {
      width: 100%;
      padding-inline: 0;
      font-size: 0.85rem;
      transform: translateX(-50%);
      left: 50%;
    }
    &:hover {
      background-color: #f7fafa;
    }

    &:focus {
      outline: 1px solid #0bafc9;
    }
  }
`;

const SignInPage = () => {
  const [showHelpOptions, setShowHelpOptions] = useState(false);

  const toggleHelpOptions = () => {
    setShowHelpOptions(!showHelpOptions);
  };

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    dispatch(loginUser({ email, password }))
    .then((action) => {
      if (loginUser.fulfilled.match(action)) {
      } else {
        throw new Error("Error while logging in.");
      }
    })
    .catch((error) => {
      console.error("Login Error:", error);
      alert("Error while logging in.");
    });
  };

  return (
    <SIGN_IN_OUTER_CONTAINER>
      <SIGN_IN_WRAPPER>
        <figure>
          <Link to="/">
            <img
              src={am_transparent_logo}
              alt="Amazon logo"
            />
          </Link>
        </figure>
        <main>
          <div className="sign-box-container">
            <h2>Sign in</h2>
            {error && <p>Please try again.</p>}
            <form onSubmit={handleLoginSubmit}>
              <label htmlFor="email">Email</label>
              <input
                className={error ? `invalid-input` : ""}
                name="email"
                id="email"
                type="email"
                autoComplete="email"
                autoFocus
              />
              <label htmlFor="password">Password</label>
              <input
                className={error ? `invalid-input` : ""}
                name="password"
                id="password"
                type="password"
              />
              <button type="submit" method="post">
                {loading ? "Logging in..." : "Log In"}
              </button>
            </form>
            <div className="need-help">
              <span onClick={toggleHelpOptions}>
                › Need help?
              </span>
              {showHelpOptions && (
                <div className="help-options">
                  <a href="/">Forgot your password?</a>
                  <a href="/">Other issues with Sign-In</a>
                </div>
              )}
            </div>
          </div>
        </main>
        <CREATE_ACC>
          <div>
            <h5>New to Amazon?</h5>
            <Link to="/register" href=".">
              Create your Amazon account
            </Link>
          </div>
        </CREATE_ACC>
      </SIGN_IN_WRAPPER>
      <AuthRegFooter />
    </SIGN_IN_OUTER_CONTAINER>
  );
};

export default SignInPage;
