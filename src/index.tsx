import "normalize.css";
import "sal.js/dist/sal.css";

import App from "App";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import GlobalStyles from "styles/global";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
