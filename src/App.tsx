import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const App = () => {
  interface Search {
    query: string;
  }

  interface IList {
    total: number;
    totalHits: number;
    hits: {
      id: number;
      pageURL: string;
      type: string;
      tags: string;
      previewURL: string;
      previewWidth: number;
      previewHeight: number;
      webformatURL: string;
      webformatWidth: number;
      webformatHeight: number;
      largeImageURL: string;
      imageWidth: number;
      imageHeight: number;
      imageSize: number;
      views: number;
      downloads: number;
      favorites: number;
      likes: number;
      comments: number;
      user_id: number;
      user: string;
      userImageURL: string;
    }[];
  }
  const [search, setSearch] = useState<Search>({
    query: "",
  });

  const [list, setList] = useState<IList>();

  const [loading, setLoading] = useState<boolean>(false);
  const typer = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
    GetImages(e.target.value);
  };

  const GetImages = async (image: string): Promise<void> => {
    try {
      setLoading(true);
      const { data } = await axios({
        url:
          "https://pixabay.com/api/?key=18269871-9984b5717c4bef14378a76910&q=" +
          image +
          "&image_type=photo&pretty=true",
      });
      setList(data);
    } catch (err) {
      console.log(err.response);
    } finally {
      setLoading(true);
    }
  };

  return (
    <>
      <Container>
        <h1>PixaBay Finder</h1>
        <InputRow>
          <Col>
            <Input
              id="query"
              name="query"
              placeholder="Type here"
              value={search.query}
              onChange={typer}
            />
          </Col>
        </InputRow>

        <Row>
          {search.query ? (
            list && list.totalHits > 0 ? (
              loading ? (
                list.hits.map((item, i: number) => (
                  <ImageCol key={i}>
                    <a data-lightbox="mygallery" href={item.largeImageURL}>
                      <img src={item.webformatURL} alt="" />
                    </a>
                  </ImageCol>
                ))
              ) : (
                <div className="spinner"></div>
              )
            ) : (
              <NoData>No images found!</NoData>
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

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  @media (max-width: 1900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Col = styled.div`
  margin-top: 30px;
`;

const NoData = styled.div`
  grid-column-start: 3;
  grid-column-end: 5;
  @media (max-width: 1900px) {
    grid-column-start: 1;
    grid-column-end: 5;
  }
`;

const ImageCol = styled.div`
  padding: 20px;

  img {
    height: 300px;
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
