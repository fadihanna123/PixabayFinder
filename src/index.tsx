import "normalize.css";

import Aos from "aos";
import App from "App";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import GlobalStyles from "styles/global";

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
