'use client';
import styled from 'styled-components';

export const NoData = styled.div`
  grid-column-start: 3;
  grid-column-end: 5;
  transition: 0.3s all;

  @media (max-width: 1900px) {
    grid-column-start: 1;
    grid-column-end: 5;
  }
`;

export const ImageRow = styled.div`
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

export const VideoItem = styled.video`
  max-width: 100%;
  height: 300px;
  padding: 40px;
  transition: 0.3s all;
`;

export const VideoRow = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  transition: 0.3s all;

  @media (max-width: 1900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;
