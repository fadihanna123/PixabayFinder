import styled from "@emotion/styled";
import axios from "axios";
import PhotosList from "components/PhotosList";
import SearchForm from "components/SearchForm";
import Footer from "includes/Footer";
import { useEffect } from "react";
import sal from "sal.js";
import { space, typography } from "styled-system";

axios.defaults.baseURL = "https://pixabay.com/api/";
axios.defaults.headers["Content-Type"] = "application/json";

const App = () => {
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
