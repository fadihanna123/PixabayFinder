import { Props } from "../typings";
import PropTypes from "prop-types";
import styled from "styled-components";

const PhotosList = ({ search, list, loading }: Props) => {
  return (
    <>
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
    </>
  );
};

PhotosList.propTypes = {
  search: PropTypes.object.isRequired,
  list: PropTypes.object,
  loading: PropTypes.bool.isRequired,
};

PhotosList.defaultProps = {
  search: { query: "" },
  list: {},
  loading: false,
};

export default PhotosList;

const ImageCol = styled.div`
  padding: 20px;
  img {
    height: 300px;
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
