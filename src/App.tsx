import { useState } from "react";
import styled from "styled-components";

import PhotosList from "./components/PhotosList";
import SearchForm from "./components/SearchForm";
import { IList, Search } from "./typings";

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
        <PhotosList
          error={error}
          setError={setError}
          list={list}
          search={search}
          loading={loading}
        />
        <i>Created by Fadi Hanna.</i>
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  margin: 10px;
  text-align: center;
`;
