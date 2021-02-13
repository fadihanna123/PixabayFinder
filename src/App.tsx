import React, { useState } from "react";
import styled from "styled-components";
import { Search, IList } from "./typings/List";

import SearchForm from "./components/SearchForm";
import PhotosList from "./components/PhotosList";

const App = () => {
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
          list={list}
          search={search}
          setSearch={setSearch}
          loading={loading}
          setList={setList}
          setLoading={setLoading}
        />
        <PhotosList
          list={list}
          search={search}
          setSearch={setSearch}
          loading={loading}
          setList={setList}
          setLoading={setLoading}
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
