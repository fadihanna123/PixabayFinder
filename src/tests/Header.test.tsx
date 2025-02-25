import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';

// Components
import Header from '@inc/Header';
import ReduxStore from '@core/redux/ReduxStore';

it('Render Header', () => {
  const { getByText } = render(
    <ReduxStore>
      <Header />
    </ReduxStore>
  );
  expect(getByText(/EN/)).toBeInTheDocument();
});
