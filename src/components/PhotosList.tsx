import { FC } from "react";
import { Flip, ToastContainer } from "react-toastify";
import { useRecoilState } from "recoil";
import { listState, loadingState, searchFormState } from "states";
import styled from "styled-components";

import ImageItem from "./PhotoItem";

const PhotosList: FC = () => {
  const [searchForm] = useRecoilState(searchFormState);
  const [list] = useRecoilState(listState);
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
            !loading ? (
              list.hits.map((item: any, i: number) => (
                <ImageItem key={i} item={item} />
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
      <ToastContainer transition={Flip} />
    </main>
  );
};

export default PhotosList;

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
