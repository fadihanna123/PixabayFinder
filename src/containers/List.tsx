import React from 'react';

// Components
import PhotoItem from './PhotoItem';
import Loader from '../ui/Loader';
import { ImageRow, NoData, VideoItem, VideoRow } from '../styles';
import useReduxConsts from '../hooks/useReduxConsts';

const List: React.FC = () => {
  const { imgList, mediaLoading, searchForm, searchType, videoList } =
    useReduxConsts();

  if (mediaLoading) {
    return <Loader className={['spinner']} />;
  }

  return (
    <main>
      {(imgList && imgList?.hits.length === 0) ||
      imgList?.hits.length === undefined ||
      searchForm.query === '' ? (
        ''
      ) : (
        <>
          <b>Results found:</b> {imgList?.hits.length}
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
              !mediaLoading ? (
                videoList?.hits.map((video: any, i: number) => {
                  return (
                    <VideoItem
                      key={i}
                      controls
                      src={video.videos.small.url}
                      autoPlay={true}
                      muted={true}
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
    </main>
  );
};

export default List;
