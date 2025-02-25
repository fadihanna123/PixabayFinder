import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';

// Components
import Layout from '@core/app/Layout';
import ReduxStore from '@core/redux/ReduxStore';

it('Render Layout', () => {
  const { getByText } = render(
    <ReduxStore>
      <Layout />
    </ReduxStore>
  );
  expect(getByText(/PixaBay Finder/)).toBeInTheDocument();
});
