import "normalize.css";

import App from "App";
import GlobalStyles from "global";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Aos from "aos";

Aos.init();

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
