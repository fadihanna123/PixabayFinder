import { getImages, getVideos } from 'functions';

jest.mock('axios');

it('get Images', async () => {
  const data = await getImages('car');
  expect(Object.entries(data)).toHaveLength(2);
});

it('get Videos', async () => {
  const data = await getVideos<string>('car');
  expect(data).not.toMatchObject({ totalHits: 0 });
});
