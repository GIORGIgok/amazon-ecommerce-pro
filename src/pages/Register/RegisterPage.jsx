import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import am_transparent_logo from "../../assets/imgs/am-logo-transparent.png";
import AuthRegFooter from "../../components/Common/AuthRegFooter/AuthRegLegal";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/user/userSlice";

const REGISTER_OUTER_CONTAINER = styled.section`
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
`;

const REGISTER_WRAPPER = styled.div`
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
`;

const Divider = styled.div`
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
`;

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const regLoading = useSelector((state) => state.user.loading);
  const regError = useSelector((state) => state.user.error);

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [passLength, setPassLength] = useState(undefined);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [inputFilled, setInputFilled] = useState({
    userName: false,
    email: false,
    password: false,
    rePassword: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "password") {
      setPassLength(value.length);
    }
    // checking if passwords match
    if (name === "rePassword" && value !== formData.password) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
    // checking if inputs are empty
    if (value.trim() === "") {
      setInputFilled((prevInputs) => ({
        ...prevInputs,
        [name]: true,
      }));
    } else {
      setInputFilled((prevInputs) => ({
        ...prevInputs,
        [name]: false,
      }));
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    const { userName, email, password, rePassword } = formData;

    // additional validations for Submit button to prevent server from useless requests \\

    // "@"" checking for that case if browser's default validation fails
    if (!email.includes("@")) {
      alert("Please enter a valid email address containing '@...");
      return;
    }

    // checking if all inputs are filled.
    if (
      !userName.trim() ||
      !email.trim() ||
      !password.trim() ||
      !rePassword.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (password !== rePassword) {
      alert("Passwords do not match.");
      return;
    }

    dispatch(registerUser({ userName, email, password }))
      .then((action) => {
        if (registerUser.fulfilled.match(action)) {
          navigate("/sign-in");
        } else {
          throw new Error("Registration failed");
        }
      })
      .catch((error) => {
        console.error("Registration Error:", error);
        alert("Error while registering.");
      });
  };

  return (
    <REGISTER_OUTER_CONTAINER>
      <Link to="/">
        <figure>
          <img src={am_transparent_logo} alt="Amazon logo" />
        </figure>
      </Link>
      <REGISTER_WRAPPER>
        <main>
          <div className="register-box-container">
            <h2>Create account</h2>
            {regError && <span id="reg-main-error">Try again...</span>}
            <form onSubmit={handleRegisterSubmit}>
              <label htmlFor="reg-input">
                <span id="reg-label-txt">Username</span>
              </label>
              <input
                className={`reg-input ${
                  inputFilled.userName || regError ? "invalid" : ""
                }`}
                id="reg-input"
                type="text"
                name="userName"
                placeholder="Type username"
                value={formData.userName}
                autoComplete="userName"
                onChange={handleInputChange}
                autoFocus
              />

              <label htmlFor="email">
                <span id="reg-label-txt">E-mail</span>
              </label>
              <input
                className={`reg-input ${
                  inputFilled.email || regError ? "invalid" : ""
                }`}
                id="email"
                name="email"
                type="email"
                value={formData.email}
                autoComplete="email"
                onChange={handleInputChange}
              />

              <label htmlFor="password">
                <span id="reg-label-txt">Password</span>
              </label>
              <input
                className={`reg-input ${
                  passLength < 6 || !passwordsMatch || regError ? "invalid" : ""
                }`}
                id="password"
                type="password"
                name="password"
                placeholder="At least 6 characters"
                value={formData.password}
                onChange={handleInputChange}
              />
              <span id="reg-pass-warn">
                {" "}
                Passwords must be at least 6 characters.
              </span>

              <label htmlFor="rePassword">
                <span id="reg-label-txt">Re-enter password</span>
              </label>
              <input
                className={`reg-input ${
                  !passwordsMatch || inputFilled.rePassword || regError
                    ? "invalid"
                    : ""
                }`}
                id="rePassword"
                type="password"
                name="rePassword"
                onChange={handleInputChange}
              />

              <button id="register-submit" type="submit" disabled={regLoading}>
                {regLoading ? "Registering..." : "Register"}
              </button>
            </form>
            <span id="reg-warning">
              By creating an account, you agree to Amazon's{" "}
              <a href="/">Conditions of Use</a> and{" "}
              <a href="/">Privacy Notice.</a>
            </span>
          </div>
          <Divider />
          <div className="reg-already-have-acc">
            <span id="reg-already-txt">
              Already have an account?{" "}
              <Link className="reg-already-links" to="/sign-in">
                Sign in
              </Link>
            </span>
            <span id="reg-already-txt">
              Buying for work?{" "}
              <Link className="reg-already-links" to="/Register">
                Create a free business account
              </Link>
            </span>
          </div>
        </main>
      </REGISTER_WRAPPER>
      <AuthRegFooter />
    </REGISTER_OUTER_CONTAINER>
  );
};

export default RegisterPage;
