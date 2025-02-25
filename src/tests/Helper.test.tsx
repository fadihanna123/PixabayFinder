// import { it, expect } from 'vitest';

// // Components
// import useAPI from '@hooks/useAPI';
// import { PixabayKey } from '@utils/envsVariables';

// jest.mock('axios');

// it('get Images', async () => {
//   const imagesEndPoint: string = `?key=${PixabayKey}&q=car`;
//   const { data } = useAPI(imagesEndPoint, 'get');
//   expect(Object.entries(data!)).toHaveLength(2);
// });

// it('get Videos', async () => {
//   const videosEndPoint: string = `videos/?key=${PixabayKey}&q=car`;
//   const { data } = useAPI(videosEndPoint, 'get');
//   expect(data).not.toMatchObject({ totalHits: 0 });
// });
