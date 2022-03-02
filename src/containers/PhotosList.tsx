import {
  ImgListReducerTypes,
  LoadingReducerTypes,
  SearchFormReducerTypes,
  SearchTypeReducerTypes,
  VideoListReducerTypes,
} from 'models';
import { useSelector } from 'react-redux';
import { Flip, ToastContainer } from 'react-toastify';
import { NoData, Row } from 'styles/photoListStyles';

import PhotoItem from './PhotoItem';

const PhotosList: React.FC = () => {
  const searchForm = useSelector(
    (state: SearchFormReducerTypes) => state.searchFormReducer
  );

  const imgList = useSelector(
    (state: ImgListReducerTypes) => state.imgListReducer
  );

  const videoList = useSelector(
    (state: VideoListReducerTypes) => state.VideoListReducer
  );

  const loading = useSelector(
    (state: LoadingReducerTypes) => state.loadingReducer
  );

  const searchType = useSelector(
    (state: SearchTypeReducerTypes) => state.searchTypeReducer
  );

  return (
    <main>
      {imgList?.hits.length === 0 ||
      imgList?.hits.length === undefined ||
      searchForm.query === "" ? (
        ""
      ) : (
        <>
          <b data-sal="flip-left">Results found:</b> {imgList?.hits.length}
        </>
      )}
      <Row>
        {searchType === "Images" ? (
          searchForm.query ? (
            imgList && imgList.totalHits ? (
              !loading ? (
                imgList.hits.map((item, i) => {
                  return <PhotoItem key={i} item={item} />;
                })
              ) : (
                <div className="spinner"></div>
              )
            ) : (
              <NoData>No images found! 😔</NoData>
            )
          ) : (
            ""
          )
        ) : (
          videoList?.hits.map((item: any) => {
            <video src={item.videos.small.url}></video>;
          })
        )}
      </Row>
      <ToastContainer transition={Flip} />
    </main>
  );
};

export default PhotosList;
