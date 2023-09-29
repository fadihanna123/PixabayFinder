import { Flip, ToastContainer } from 'react-toastify';
import { useAppSelector } from 'redux/app';
import { getImgList } from 'redux/reducers/imgList';
import { getLoading } from 'redux/reducers/loading';
import { getSearchForm } from 'redux/reducers/searchForm';
import { getSearchType } from 'redux/reducers/searchType';
import { getVideoList } from 'redux/reducers/videoList';
import { ImageRow, NoData, VideoItem, VideoRow } from 'styles';
import React from 'react';

// Components
import PhotoItem from './PhotoItem';
import Loader from 'pages/ui/Loader';
import { NextPage } from 'next';

const List: NextPage = () => {
  const searchForm: SearchForm = useAppSelector(getSearchForm);

  const imgList: IList = useAppSelector(getImgList);

  const videoList = useAppSelector(getVideoList);

  const loading: boolean = useAppSelector(getLoading);

  const searchType: string = useAppSelector(getSearchType);

  if (loading) {
    return <Loader className={['spinner']} />;
  }

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
      <ImageRow>
        {searchType === 'Images' &&
          (searchForm.query ? (
            imgList && imgList.totalHits ? (
              imgList.hits.map((image: HitsOfList, i: number) => {
                return <PhotoItem key={i} item={image} />;
              })
            ) : (
              <NoData>No images found! 😔</NoData>
            )
          ) : (
            ''
          ))}
      </ImageRow>
      <VideoRow>
        {searchType === 'Videos' &&
          (searchForm.query ? (
            videoList && videoList.totalHits ? (
              !loading ? (
                videoList?.hits.map((video: any, i: number) => {
                  return (
                    <VideoItem
                      key={i}
                      controls
                      src={video.videos.small.url}
                    ></VideoItem>
                  );
                })
              ) : (
                <Loader className={['spinner']} />
              )
            ) : (
              <NoData>No videos found! 😔</NoData>
            )
          ) : (
            ''
          ))}
      </VideoRow>
      <ToastContainer transition={Flip} />
    </main>
  );
};

export default List;
