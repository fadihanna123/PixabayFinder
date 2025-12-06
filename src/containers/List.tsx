import React from 'react';

// Components
import PhotoItem from './PhotoItem';
import Loader from '../ui/Loader';
import useTranslate from '../hooks/useTranslate';
import { useGlobalContext } from '@core/states';

const List: React.FC = () => {
  const { mediaLoading, searchForm, searchType, imgList, videoList, lang } =
    useGlobalContext();

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
      <div className='imageRow'>
        {searchType === 'Images' &&
          (searchForm.query ? (
            imgList && imgList.totalHits ? (
              imgList.hits.map((image: HitsOfList, i: number) => {
                return <PhotoItem key={i} item={image} />;
              })
            ) : (
              <div className='noData'>
                {useTranslate('NO_IMAGES_FOUND_TXT', lang)}! 😔
              </div>
            )
          ) : (
            ''
          ))}
      </div>
      <div className='videoRow'>
        {searchType === 'Videos' &&
          (searchForm.query ? (
            videoList && videoList.totalHits ? (
              !mediaLoading ? (
                videoList?.hits.map((video: HitsOfList, i: number) => {
                  return (
                    <video
                      className='videoItem'
                      key={i}
                      controls
                      src={video.videos?.small.url}
                      autoPlay={false}
                      muted={true}
                    ></video>
                  );
                })
              ) : (
                <Loader className={['spinner']} />
              )
            ) : (
              <div className='noData'>
                {useTranslate('NO_VIDEOS_FOUND_TXT', lang)}! 😔
              </div>
            )
          ) : (
            ''
          ))}
      </div>
    </main>
  );
};

export default List;
