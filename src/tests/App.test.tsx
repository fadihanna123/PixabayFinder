import { getImages, getVideos } from 'functions';

it('get Images', async () => {
  const data = await getImages<string>('car');
  expect(data).not.toMatchObject({ totalHits: 0 });
});

it('get Videos', async () => {
  const data = await getVideos<string>('car');
  expect(data).not.toMatchObject({ totalHits: 0 });
});
