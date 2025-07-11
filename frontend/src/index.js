
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import Login from "./landing_page/signup/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  </React.StrictMode>
);

// 
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { HashRouter, Routes, Route, Link } from 'react-router-dom';

// // Minimal components for testing
// const Home = () => <h1>Home Page <Link to="/test">Test</Link></h1>;
// const Test = () => <h1>Test Page</h1>;
// const Nav = () => (
//   <nav>
//     <Link to="/">Home</Link> | 
//     <Link to="/test">Test</Link>
//   </nav>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <HashRouter>
//     <Nav />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/test" element={<Test />} />
//     </Routes>
//   </HashRouter>
// );