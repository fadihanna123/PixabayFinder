import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const App = () => {
  const [search, setSearch] = useState({
    query: "",
  });

  const [list, setList] = useState([]);

  const [loading, setLoading] = useState(false);
  const typer = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
    GetImages(e.target.value);
  };

  const GetImages = async (image) => {
    try {
      setLoading(false);
      await axios({
        url:
          "https://pixabay.com/api/?key=18269871-9984b5717c4bef14378a76910&q=" +
          image +
          "&image_type=photo&pretty=true",
      }).then((res) => setList(res.data));
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container>
        <h1>PixaBay Finder</h1>
        <Row>
          <Col>
            <Input
              id="query"
              name="query"
              placeholder="Type here"
              value={search.query}
              onChange={typer}
            />
          </Col>
        </Row>

        <Row>
          {search.query ? (
            list.totalHits > 0 ? (
              loading ? (
                list.hits.map((item, i) => (
                  <ImageCol key={i}>
                    <a data-lightbox="mygallery" href={item.largeImageURL}>
                      <img src={item.webformatURL} alt="" />
                    </a>
                  </ImageCol>
                ))
              ) : (
                "No data..."
              )
            ) : (
              <div className="spinner"></div>
            )
          ) : (
            ""
          )}
        </Row>
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

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 1700px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const ImageCol = styled.div`
  width: 20%;
  padding: 10px;
  img {
    width: 100%;
    height: 500px;
  }
  @media (max-width: 1700px) {
    width: 100%;
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  min-height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid gray;
  appearance: none;
  border-radius: 0.25rem;
  margin-bottom: 10px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    border-color: #0275d8;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px lightblue;
    outline: 0 none;
  }
`;
