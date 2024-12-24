import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Title from "./Greeting.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Title />
    <App></App>
  </StrictMode>
);
