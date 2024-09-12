import React from 'react';

// Components
import PhotoItem from './PhotoItem';
import Loader from '../ui/Loader';
import { ImageRow, NoData, VideoItem, VideoRow } from '../styles';
import useReduxConsts from '../hooks/useReduxConsts';
import { PixabayKey } from '../utils';
import useAPI from '../hooks/useAPI';
import { PacmanLoader } from 'react-spinners';

const List: React.FC = () => {
  const { mediaLoading, searchForm, searchType } = useReduxConsts();

  const imagesEndPoint: string = `?key=${PixabayKey}&q=${searchForm.query}`;
  const videosEndPoint: string = `videos/?key=${PixabayKey}&q=${searchForm.query}`;
  const { data: imgList, loading: imagesLoading } = useAPI(
    imagesEndPoint,
    'get',
    searchForm
  );
  const { data: videoList, loading: videoLoading } = useAPI(
    videosEndPoint,
    'get',
    searchForm
  );

  if (imagesLoading || videoLoading) {
    return (
      <PacmanLoader
        cssOverride={{ margin: '0 auto' }}
        loading={imagesLoading ?? videoLoading}
        color='#36d7b7'
      />
    );
  }

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
