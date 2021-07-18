import { useRecoilState } from "recoil";
import { errorState, listState, loadingState, searchFormState } from "States";
import styled from "styled-components";
import ImageItem from "./ImageItem";

const PhotosList = () => {
  const [searchForm] = useRecoilState(searchFormState);
  const [list] = useRecoilState(listState);
  const [error] = useRecoilState(errorState);
  const [loading] = useRecoilState(loadingState);

  return (
    <main>
      {list?.hits.length === 0 ||
      list?.hits.length === undefined ||
      searchForm.query === "" ? (
        ""
      ) : (
        <>
          <b data-sal="flip-left">Results found:</b> {list?.hits.length}
        </>
      )}
      <Row>
        {searchForm.query ? (
          list && list.totalHits ? (
            error ? (
              <Error>{error}</Error>
            ) : loading ? (
              list.hits.map((item, i: number) => (
                <ImageItem item={item} i={i} />
              ))
            ) : (
              <div className="spinner"></div>
            )
          ) : (
            <NoData>No images found! 😔</NoData>
          )
        ) : (
          ""
        )}
      </Row>
    </main>
  );
};

export default PhotosList;

const Error = styled.div`
  color: red;
  transition: 0.3s;
`;

const NoData = styled.div`
  grid-column-start: 3;
  grid-column-end: 5;
  transition: 0.3s;

  @media (max-width: 1900px) {
    grid-column-start: 1;
    grid-column-end: 5;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  transition: 0.3s;

  @media (max-width: 1900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;
