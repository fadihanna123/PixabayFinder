import { getImages, getVideos } from 'functions';

it('get Images', async () => {
  const data = await getImages('car');
  expect(data).not.toMatchObject({ totalHits: 0 });
});

it('get Videos', async () => {
  const data = await getVideos('car');
  expect(data).not.toMatchObject({ totalHits: 0 });
});
