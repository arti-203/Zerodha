// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { HashRouter, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <HashRouter>
//     <Routes>
//       <Route path="/*" element={<Home />} />
//     </Routes>
//     </HashRouter>
//   </React.StrictMode>
// );

// Remove Routes and Route from index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
