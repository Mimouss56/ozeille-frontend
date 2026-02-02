import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";

import "./index.css";
import { AppRouter } from "./routes/AppRouter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
      <ToastContainer position="top-right" autoClose={5000} />
    </BrowserRouter>
  </StrictMode>,
);
