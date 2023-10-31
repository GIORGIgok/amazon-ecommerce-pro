import "./App.css";
import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// components
import Home from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import CategorizedProdsPage from "./pages/CategorizedProdsPage/CategorizedProdsPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import CartPage from "./pages/CartPage/CartPage";
import ProtectNotAuthorized from "./routes/ProtectNotAuthorized";
import ProtectAuthorized from "./routes/ProtectAuthorized";
import Header from "./components/Common/Header/Header";
// lazy loadings
const Footer = lazy(() => import("./components/Common/Footer/Footer"));
const RegisterPage = lazy(() => import("./pages/Register/RegisterPage"));
const SignInPage = lazy(() => import("./pages/SignIn/SignInPage"));
const UserProfilePage = lazy(() =>
  import("./pages/UserProfile/UserProfilePage")
);
const CheckoutPage = lazy(() => import("./pages/CheckoutPage/CheckoutPage"));
const BuyNowPage = lazy(() => import("./pages/BuyNow/BuyNowPage"));
const AboutUsPage = lazy(() => import("./pages/About/AboutUsPage"));

function App() {
  return (
    <Router basename="/">
      <Header />
      <Routes>
        {/* --- Public Routes --- */}
        <Route path="/" element={<Home />} />
        <Route path="/ProductPage/:productId" element={<ProductPage />} />
        <Route
          path="/CategorizedProds/:categoryId"
          element={<CategorizedProdsPage />}
        />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="/about-us"
          element={
            <Suspense fallback={<div className="loading-dark">Loading...</div>}>
              <AboutUsPage />
            </Suspense>
          }
        />
        <Route
          path="/buy-now"
          element={
            <Suspense fallback={<div className="loading-bright">Loading...</div>}>
              <BuyNowPage />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFoundPage />} />

        {/* Routes/Pages protected from Unauthorized Users */}
        <Route element={<ProtectNotAuthorized />}>
          <Route
            path="/user/profile"
            element={
              <Suspense
                fallback={<div className="loading-bright">Loading...</div>}
              >
                <UserProfilePage />
              </Suspense>
            }
          />
          <Route
            path="/checkout"
            element={
              <Suspense
                fallback={<div className="loading-bright">Loading...</div>}
              >
                <CheckoutPage />
              </Suspense>
            }
          />
        </Route>

        {/* Routes/Pages protected from Authorized Users */}
        <Route element={<ProtectAuthorized />}>
          <Route
            path="/register"
            element={
              <Suspense
                fallback={<div className="loading-bright">Loading...</div>}
              >
                <RegisterPage />
              </Suspense>
            }
          />
          <Route
            path="/sign-in"
            element={
              <Suspense
                fallback={<div className="loading-bright">Loading...</div>}
              >
                <SignInPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
      <Suspense fallback={<div className="loading-dark"></div>}>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
