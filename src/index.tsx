import "normalize.css";
import "react-toastify/dist/ReactToastify.css";
import "sal.js/dist/sal.css";

import App from "containers/App";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "redux/store";
import GlobalStyles from "styles/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
