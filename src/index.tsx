import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./global/styles/raw/reset.css";
import "./global/styles/raw/default.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
