import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App.js";
import Banner from "./components/banner.js";
import Cart from "./components/cart.js";
import Books from "./components/bookList.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Banner />
    <Cart />
    <Books />
  </StrictMode>
);
