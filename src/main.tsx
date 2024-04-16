import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DarkModeContextProvider } from "./context/darkModeContext.tsx";
import { ThemeContextProvider } from "./context/themeContext.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeContextProvider>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
