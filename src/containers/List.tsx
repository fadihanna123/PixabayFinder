import React from 'react';

// Components
import PhotoItem from './PhotoItem';
import Loader from '../ui/Loader';
import { ImageRow, NoData, VideoItem, VideoRow } from '@styles/listStyles';
import useReduxConsts from '../hooks/useReduxConsts';
import useTranslate from '../hooks/useTranslate';

const List: React.FC = () => {
  const { mediaLoading, searchForm, searchType, imgList, videoList, lang } =
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
          <b>{useTranslate('RESULTS_FOUND_TXT', lang)}:</b>{' '}
          {imgList?.hits.length}
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
              <NoData>{useTranslate('NO_IMAGES_FOUND_TXT', lang)}! 😔</NoData>
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
                videoList?.hits.map((video: HitsOfList, i: number) => {
                  return (
                    <VideoItem
                      key={i}
                      controls
                      src={video.videos?.small.url}
                      autoPlay={false}
                      muted={true}
                    ></VideoItem>
                  );
                })
              ) : (
                <Loader className={['spinner']} />
              )
            ) : (
              <NoData>{useTranslate('NO_VIDEOS_FOUND_TXT', lang)}! 😔</NoData>
            )
          ) : (
            ''
          ))}
      </VideoRow>
    </main>
  );
};

export default List;
