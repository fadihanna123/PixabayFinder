import "normalize.css";
import "react-toastify/dist/ReactToastify.css";
import "sal.js/dist/sal.css";

import App from "containers/App";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "redux/store";
import GlobalStyles from "styles/globalStyles";

const root: ReactDOM.Root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLDivElement
);

root.render(
    <React.StrictMode>
        <GlobalStyles />
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
