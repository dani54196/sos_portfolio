import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import "./translation/i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
