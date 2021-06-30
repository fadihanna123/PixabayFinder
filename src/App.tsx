import axios from "axios";
import PhotosList from "components/PhotosList";
import SearchForm from "components/SearchForm";
import Footer from "includes/Footer";
import styled from "styled-components";

axios.defaults.baseURL = "https://pixabay.com/api/";
axios.defaults.headers["Content-Type"] = "application/json";

const App = () => {
  return (
    <Container>
      <h1 data-aos="flip-left">PixaBay Finder</h1>
      <SearchForm />
      <PhotosList />
      <Footer />
    </Container>
  );
};

export default App;

const Container = styled.div`
  margin: 10px;
  text-align: center;
  transition: 0.3s;
`;
