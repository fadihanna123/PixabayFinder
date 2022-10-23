import { HitsOfList, IList, SearchForm } from 'models';
import { Flip, ToastContainer } from 'react-toastify';
import { useAppSelector } from 'redux/app';
import { getImgList } from 'redux/reducers/imgList';
import { getLoading } from 'redux/reducers/loading';
import { getSearchForm } from 'redux/reducers/searchForm';
import { getSearchType } from 'redux/reducers/searchType';
import { getVideoList } from 'redux/reducers/videoList';
import { NoData, Row } from 'styles/photoListStyles';
import Loader from 'ui/Loader';

import PhotoItem from './PhotoItem';

const PhotosList: React.FC = () => {
  const searchForm: SearchForm = useAppSelector(getSearchForm);

  const imgList: IList = useAppSelector(getImgList);

  const videoList = useAppSelector(getVideoList);

  const loading: boolean = useAppSelector(getLoading);

  const searchType: string = useAppSelector(getSearchType);

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
        {searchType === 'Videos' &&
          videoList?.hits.map((item: any) => (
            <video src={item.videos.small.url}></video>
          ))}
      </Row>
      <ToastContainer transition={Flip} />
    </main>
  );
};

export default PhotosList;
