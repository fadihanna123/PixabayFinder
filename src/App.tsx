import axios from "axios";
import PhotosList from "components/PhotosList";
import SearchForm from "components/SearchForm";
import { useState } from "react";
import styled from "styled-components";
import { IList, Search } from "typings";
import Footer from "includes/Footer";

axios.defaults.baseURL = "https://pixabay.com/api/";
axios.defaults.headers["Content-Type"] = "application/json";

const App = () => {
  const [error, setError] = useState<string>("");

  const [search, setSearch] = useState<Search>({
    query: "",
  });
  const [list, setList] = useState<IList>();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <Container>
        <h1>PixaBay Finder</h1>
        <SearchForm
          search={search}
          setSearch={setSearch}
          setList={setList}
          setLoading={setLoading}
          setError={setError}
        />
        <main>
          <PhotosList
            error={error}
            setError={setError}
            list={list}
            search={search}
            loading={loading}
          />
        </main>
        <Footer />
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  margin: 10px;
  text-align: center;
  transition: 0.3s;
`;
