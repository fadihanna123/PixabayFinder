import styled from "@emotion/styled";
import PhotosList from "containers/PhotosList";
import SearchForm from "containers/SearchForm";
import Footer from "inc/Footer";
import { space, typography } from "styled-system";

const Layout: React.FC = () => (
  <Container m={10} textAlign="center">
    <h1 data-sal="flip-left">PixaBay Finder</h1>
    <SearchForm />
    <PhotosList />
    <Footer />
  </Container>
);

export default Layout;

const Container = styled("section")(typography, space);
