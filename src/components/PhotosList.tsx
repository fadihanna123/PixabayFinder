import PropTypes from "prop-types";
import styled from "styled-components";
import { Props } from "typings";

const PhotosList = ({ search, list, loading, error }: Props) => {
  return (
    <>
      <Row>
        {search.query ? (
          list && list.totalHits > 0 ? (
            error ? (
              <div style={{ color: "red" }}>{error}</div>
            ) : loading ? (
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
    </>
  );
};

PhotosList.propTypes = {
  search: PropTypes.object.isRequired,
  list: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

PhotosList.defaultProps = {
  search: { query: "" },
  list: {},
  loading: false,
  error: "",
};

export default PhotosList;

const ImageCol = styled.div`
  padding: 20px;
  overflow: hidden;

  img {
    max-width: 100%;
    height: 100%;
  }
`;

const NoData = styled.div`
  grid-column-start: 3;
  grid-column-end: 5;

  @media (max-width: 1900px) {
    grid-column-start: 1;
    grid-column-end: 5;
  }
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
