import { getImages, getVideos } from 'functions';
import { IList } from 'models';
import { jest } from '@jest/globals';

jest.mock('axios');

it('get Images', async () => {
  const data: IList[] = await getImages('car');
  expect(Object.entries(data)).toHaveLength(2);
});

it('get Videos', async () => {
  const data = await getVideos<string>('car');
  expect(data).not.toMatchObject({ totalHits: 0 });
});
