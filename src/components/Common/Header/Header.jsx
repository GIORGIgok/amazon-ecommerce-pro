import "./Header.css";
// ---------- \\
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCategories } from "../../../features/products/productsSlice";
// imgs \\
import logo from "../../../assets/imgs/amazon-logo.png";
import delivery_img from "../../../assets/imgs/location.png";
import lang_flag from "../../../assets/imgs/usa-flag.png";
import burger_menu from "../../../assets/imgs/burger-menu.png";
import cart_img from "../../../assets/imgs/cart-image.png";
import dropdown_arrow from "../../../assets/imgs/amazon-nav-arrow.png";
import responsive_signin from "../../../assets/imgs/responsive-signin.png";
import toggle_user from "../../../assets/imgs/toggleUser.png";
// dropdowns \\
import LangDropdown from "./Dropdowns/LangDropdown";
import AuthOrders from "./Dropdowns/AuthOrders";
import ResponsiveDropdown from "./Dropdowns/ResponsiveDropdown";
import { getMyCartProducts } from "../../../features/cart/cartSlice";
// search \\
import Search from "./Search/Search";

function Header() {
  // lang-dropdown \\
  const [langIsActive, setLangIsActive] = useState(false);
  // auth-orders-dropdown \\
  const [authIsActive, setAuthIsActive] = useState(false);

  //lang-dropdown-functions\\
  const handleLangMouseEnter = () => {
    setTimeout(() => {
      setLangIsActive(true);
    }, 370);
  };

  const handleLangMouseLeave = () => {
    setTimeout(() => {
      setLangIsActive(false);
    }, 380);
  };

  // ----------------------
  //auth-orders-functions\\
  const handleAuthMouseEnter = () => {
    setTimeout(() => {
      setAuthIsActive(true);
    }, 370);
  };

  const handleAuthMouseLeave = () => {
    setTimeout(() => {
      setAuthIsActive(false);
    }, 380);
  };

  // toggle-menu & close menu
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // toggle responsive functionality
  const [isResponsiveOpen, setIsResponsiveOpen] = useState(false);

  const toggleResponsive = () => {
    if (isLoggedIn) {
      setIsResponsiveOpen((prevState) => !prevState);
    }
  };

  // -------------------------------
  const user = useSelector((state) => state.user);
  const isLoggedIn = user.isLoggedIn;
  const allCategories = useSelector((state) => state.products.allCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories())
      .then(() => {
        if (isLoggedIn) {
          dispatch(getMyCartProducts());
        }
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, [dispatch, isLoggedIn]);

  // handleToggleHeader - if user is not logged in, redirect to login page else to profile page
  const navigate = useNavigate();
  const handleToggleHeader = () => {
    if (!isLoggedIn) {
      navigate("/sign-in");
      setMenuOpen(false);
    } else {
      navigate("/user/profile");
      setMenuOpen(false);
    }
  };

  // hiding header for some paths
  const location = useLocation();
  const pathsToHideHeader = ["/register", "/sign-in", "/checkout", "/buy-now"];
  const hideHeader = pathsToHideHeader.includes(location.pathname);
  const headerStyle = { display: hideHeader ? "none" : "block" };

  // for cart items quantity
  const productsInCart = useSelector((state) => state.cart.productsInCart);

  return (
    <>
      <header style={headerStyle}>
        <div className="header-container">
          <figure>
            <Link to="/">
              <img id="amazon-logo" src={logo} alt="Amazon Logo" />
            </Link>
          </figure>
          <div className="del-loc-img">
            <figure>
              <img id="delivery-loc-img" src={delivery_img} alt="location" />
            </figure>
          </div>
          <div className="delivery-loc">
            <p id="deliver-to">Deliver to</p>
            <p id="deliver-country">Georgia</p>
          </div>
          {/* ----------Search--------- */}
          <Search />
          {/* ------------------------- */}
          <div className="responsive-signin" onClick={toggleResponsive}>
            {isLoggedIn ? (
              <>
                <span id="responsive-username">
                  {user.user.username.length > 5
                    ? user.user.username.slice(0, 5) + "..."
                    : user.user.username}
                </span>
                <figure id="resp-figure">
                  <img
                    id="resp-img"
                    src={responsive_signin}
                    alt="user-profile-img"
                  />
                </figure>
                {isResponsiveOpen && <ResponsiveDropdown />}
              </>
            ) : (
              <Link to="/sign-in">
                <figure id="resp-figure">
                  <img
                    id="resp-img"
                    src={responsive_signin}
                    alt="authorization"
                  />
                </figure>
              </Link>
            )}
          </div>
          <div
            className="lang"
            onMouseEnter={handleLangMouseEnter}
            onMouseLeave={handleLangMouseLeave}
          >
            <figure>
              <img id="lang-flag" src={lang_flag} alt="eng" />
            </figure>
            <span id="lang-text">EN</span>
            <figure>
              <img
                id="dropdown-arrow"
                src={dropdown_arrow}
                alt="dropdown-arrow"
              />
            </figure>
            {langIsActive && <LangDropdown />}
          </div>
          <div
            className="auth-orders-box"
            onMouseEnter={handleAuthMouseEnter}
            onMouseLeave={handleAuthMouseLeave}
          >
            {/* conditional rendering for authorization */}
            <span id="upper-text">
              {user.isLoggedIn
                ? `Hello, ${
                    user.user.username.length > 14
                      ? `${user.user.username.slice(0, 14)}...`
                      : user.user.username
                  }`
                : "Hello, sign in"}
            </span>
            <span id="bottom-text">Account & Lists</span>
            <figure>
              <img
                id="dropdown-arrow"
                src={dropdown_arrow}
                alt="dropdown-arrow"
              />
            </figure>
            {authIsActive && <AuthOrders />}
          </div>
          <div className="returns-orders">
            <span id="upper-text">Returns</span>
            <span id="bottom-text">& Orders</span>
          </div>
          <div className="user-cart">
            <Link to="/cart">
              <figure id="cart-img-figure">
                <img id="cart-img" src={cart_img} alt="cart" />
              <span id="cart-items-count">{productsInCart.length}</span>
              </figure>
              <span id="cart-name">Cart</span>
            </Link>
          </div>
        </div>
        <nav
          className={`nav-container ${
            langIsActive || authIsActive ? "dark-overlay" : ""
          }`}
        >
          <div className={`nav-left-container ${menuOpen ? "menu-open" : ""}`}>
            <ul>
              <li>
                <figure id="nav-all" onClick={toggleMenu}>
                  <img id="burger-menu" src={burger_menu} alt="eng" />
                  All
                </figure>
              </li>
              {allCategories.slice(0, 5).map((category) => (
                <li key={category.name}>
                  <Link id="nav-others" to={`/CategorizedProds/${category.id}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-right-container">
            <a id="nav-right-side" href=".">
              Great Deals
            </a>
          </div>
        </nav>
      </header>
      {/* Left Toggle Menu */}
      {menuOpen && (
        <div className="overlay-for-toggle" onClick={closeMenu}></div>
      )}
      <aside className={`toggle-menu ${menuOpen ? "menu-open" : ""}`}>
        {menuOpen && (
          <span id="menu-close-x" onClick={closeMenu}>
            ╳
          </span>
        )}
        <div className="toggle-header" onClick={handleToggleHeader}>
          <figure id="toggle-user-figure">
            <img id="toggle-user-img" src={toggle_user} alt="toggle-user" />
          </figure>
          <span id="toggle-greeting">
            {isLoggedIn
              ? `Hello, ${
                  user.user.username.length > 12
                    ? user.user.username.slice(0, 12) +
                      (user.user.username.length > 12 ? "..." : "")
                    : user.user.username
                }`
              : "Hello, sign in"}
          </span>
        </div>
        <nav>
          <ul>
            <h3 id="toggle-menu-heading">Categories</h3>
            {allCategories.map((category) => (
              <li key={category.id}>
                <Link to={`/CategorizedProds/${category.id}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Header;
