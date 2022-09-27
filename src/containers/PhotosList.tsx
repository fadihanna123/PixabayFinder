import { HitsOfList, IList, SearchForm } from 'models';
import { useSelector } from 'react-redux';
import { Flip, ToastContainer } from 'react-toastify';
import { getImgList } from 'redux/reducers/imgList';
import { getLoading } from 'redux/reducers/loading';
import { getSearchForm } from 'redux/reducers/searchForm';
import { getSearchType } from 'redux/reducers/searchType';
import { getVideoList } from 'redux/reducers/videoList';
import { NoData, Row } from 'styles/photoListStyles';
import Loader from 'ui/Loader';

import PhotoItem from './PhotoItem';
import VideoItem from './VideoItem';

const PhotosList: React.FC = () => {
  const searchForm: SearchForm = useSelector(getSearchForm);

  const imgList: IList = useSelector(getImgList);

  const videoList = useSelector(getVideoList);

  const loading: boolean = useSelector(getLoading);

  const searchType: string = useSelector(getSearchType);

  return (
    <main>
      {imgList?.hits.length === 0 ||
      imgList?.hits.length === undefined ||
      searchForm.query === '' ? (
        ''
      ) : (
        <>
          <b data-sal='flip-left'>Results found:</b> {imgList?.hits.length}
        </>
      )}
      <Row>
        {searchType === 'Images' &&
          (searchForm.query ? (
            imgList && imgList.totalHits ? (
              !loading ? (
                imgList.hits.map((item: HitsOfList, i: number) => {
                  return <PhotoItem key={i} item={item} />;
                })
              ) : (
                <Loader className={['spinner']} />
              )
            ) : (
              <NoData>No images found! 😔</NoData>
            )
          ) : (
            ''
          ))}
        ;
        {searchType === 'Videos' &&
          videoList?.hits.map((item: any) => {
            <VideoItem location={item.videos.small.url} />;
          })}
      </Row>
      <ToastContainer transition={Flip} />
    </main>
  );
};

export default PhotosList;
