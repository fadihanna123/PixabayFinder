'use client';
import { useAppSelector } from '../../redux/app';
import { getImgList } from '../../redux/reducers/imgList';
import { getSearchForm } from '../../redux/reducers/searchForm';
import { getSearchType } from '../../redux/reducers/searchType';
import { getVideoList } from '../../redux/reducers/videoList';
import { getMediatLoading } from '../../redux/reducers';
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

  const mediaLoading: boolean = useAppSelector(getMediatLoading);

  const searchType: searchFormType = useAppSelector(getSearchType);

  if (mediaLoading) {
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
