import Layout from "app/Layout";
import axios from "axios";
import { useEffect } from "react";
import sal from "sal.js";
import { PixabayBaseURL } from "utils";

axios.defaults.baseURL = PixabayBaseURL;
axios.defaults.headers["Content-Type"] = "application/json";

const App: React.FC = () => {
  useEffect(() => {
    sal();
  }, []);

  return <Layout />;
};

export default App;
