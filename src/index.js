import React, { StrictMode } from "react";

/** 웹 브라우저와 상호작용하는 React의 라이브러리 */
import { createRoot } from "react-dom/client";

import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
