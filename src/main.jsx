import React from "react";
import ReactDOM from "react-dom/client";
import App, { Footer, Header } from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);
