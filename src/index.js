import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { QueryClient, QueryClientProvider } from "react-query";


const root = ReactDOM.createRoot(document.getElementById("root"));
let queryClint = new QueryClient();

root.render(
  <QueryClientProvider client={queryClint}>
    <App />
  </QueryClientProvider>
 
);
