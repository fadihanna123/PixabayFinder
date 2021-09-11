import styled from "@emotion/styled";
import axios from "axios";
import PhotosList from "components/PhotosList";
import SearchForm from "components/SearchForm";
import Footer from "inc/Footer";
import { useEffect } from "react";
import sal from "sal.js";
import { space, typography } from "styled-system";

const { REACT_APP_PIXABAY_BASE_URL } = process.env;
axios.defaults.baseURL = REACT_APP_PIXABAY_BASE_URL;
axios.defaults.headers["Content-Type"] = "application/json";

const App: React.FC = () => {
  useEffect(() => {
    sal();
  }, []);

  return (
    <Container m={10} textAlign="center">
      <h1 data-sal="flip-left">PixaBay Finder</h1>
      <SearchForm />
      <PhotosList />
      <Footer />
    </Container>
  );
};

export default App;

const Container = styled("section")(typography, space);
