import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../../../features/user/userSlice";

const AUTH_ORDERS_DROPDOWN = styled.div`
  top: 3.125rem /*50px*/;
  right: -8rem /*128px*/;
  position: absolute;
  z-index: 2;
  color: #252525;
  background-color: #ffffff;
  border-radius: 0.188rem /*3px*/;
  cursor: auto;
  width: 30.375rem /*486px*/;
  height: 24rem /*384px*/;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    right: 8.08rem /*129.28px*/;
    top: -0.375rem /*6px*/;
    background-color: #ffffff;
    width: 0.938rem /*15px*/;
    height: 0.938rem /*15px*/;
    transform: rotate(45deg);
  }
`;

const INNER_CONTAINER = styled.div`
  width: 97%;
  height: 98%;
  .auth-order-upper {
    float: left;
    width: 100%;
    height: 20%;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    /* conditionally for authorized user */
    .authorized-user {
      width: 97%;
      height: 75%;
      background-color: #e7f4f5;
      border-radius: 12px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      box-sizing: border-box;
      padding-inline: 0.7rem;
      & #manage-profile {
        font-size: 14px;
        color: #007185;
        text-decoration: none;
        &:hover {
          color: #c7511f;
        }
      }
    }

    /* Sign in */
    #auth-order-sign-in {
      font-size: 14px;
      text-decoration: none;
      color: black;
      background-color: #ffd814;
      padding: 7px 85px;
      border-radius: 6px;
    }
    /* New Customer? */
    p {
      margin-bottom: 0;
      margin-top: 5px;
      font-size: 11px;
      a {
        text-decoration: none;
        color: #007185;
      }
      :hover {
        color: #c7511f;
        text-decoration: underline;
      }
    }
  }
  /* Your Lists / Your Account */
  #auth-order-heading {
    margin-top: 0px;
    margin-bottom: 7px;
    font-size: 18px;
    font-weight: 600;
  }
  .auth-order-your-lists {
    float: left;
    width: 50%;
    /* height: 77%; */
    height: calc(80% - 10px);
    box-sizing: border-box;
    border-right: 1px solid #eeeeee;
    ul {
      list-style: none;
      padding-left: 1.125rem;
      /* pl 18px */
      margin-top: 0;
    }
    li {
      font-size: 13px;
      margin-bottom: 0.25rem;
      /* mb 4px */
    }
    a {
      text-decoration: none;
      color: black;
      &:hover {
        color: #c7511f;
        text-decoration: underline;
      }
    }
  }
  .auth-order-your-account {
    float: right;
    width: 50%;
    height: calc(80% - 10px);
    box-sizing: border-box;
    ul {
      list-style: none;
      padding-left: 1.125rem;
      /* pl 18px; */
      margin-top: 0;
    }
    li {
      font-size: 13px;
      margin-bottom: 4px;
    }
    a {
      text-decoration: none;
      color: black;
      &:hover {
        color: #c7511f;
        text-decoration: underline;
      }
    }
  }
`;

const AuthOrders = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
    window.location.reload();
  }

  return (
    <AUTH_ORDERS_DROPDOWN>
      <INNER_CONTAINER>
        <div className="auth-order-upper">
          {user.isLoggedIn ? (
            <>
              <div className="authorized-user">
                <a id="manage-profile" href="/user/profile">
                  Manage Profile
                </a>
              </div>
            </>
          ) : (
            <>
              <Link to="/sign-in" id="auth-order-sign-in" href="/">
                Sign in
              </Link>
              <p>
                New Customer? <Link to="/register">Start here.</Link>
              </p>
            </>
          )}
        </div>
        <div className="auth-order-your-lists">
          <ul>
            <p id="auth-order-heading">Your Lists</p>
            <li>
              <a href="/">Create a List</a>
            </li>
            <li>
              <a href="/">Find a List or Registry</a>
            </li>
          </ul>
        </div>
        <div className="auth-order-your-account">
          <ul>
            <p id="auth-order-heading">Your Account</p>
            <li>
              <Link to="/user/profile">Account</Link>
            </li>
            <li>
              <a href="/">Orders</a>
            </li>
            <li>
              <a href="/">Recommendations</a>
            </li>
            <li>
              <a href="/">Browsing History</a>
            </li>
            <li>
              <a href="/">Watchlist</a>
            </li>
            <li>
              <a href="/">Video Purchases & Rentals</a>
            </li>
            <li>
              <a href="/">Kindle Unlimited</a>
            </li>
            <li>
              <a href="/">Content & Devices</a>
            </li>
            <li>
              <a href="/">Subscribe & Save Items</a>
            </li>
            <li>
              <a href="/">Memberships & Subscriptions</a>
            </li>
            <li>
              <a href="/">Music Library</a>
            </li>
            {user.isLoggedIn && (
                <li>
                  <Link onClick={handleSignOut}>{">"}Sign out</Link>
                </li>
            )}
          </ul>
        </div>
      </INNER_CONTAINER>
    </AUTH_ORDERS_DROPDOWN>
  );
};

export default AuthOrders;
