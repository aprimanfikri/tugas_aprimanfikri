import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import GmailDotTrick from "./pages/GmailDotTrick";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/gmail-dot-trick" element={<GmailDotTrick />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
