import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import TermsOfService from "./pages/terms.jsx";
import PrivacyPolicy from "./pages/privacy.jsx";
import Faq from "./pages/faq.jsx";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
