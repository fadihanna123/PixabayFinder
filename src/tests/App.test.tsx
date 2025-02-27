import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';

// Components
import ReduxStore from '@core/redux/ReduxStore';
import App from '@core/containers/App';

it('Render App', () => {
  const { getByText } = render(
    <ReduxStore>
      <App />
    </ReduxStore>
  );
  expect(getByText(/PixaBay Finder/)).toBeInTheDocument();
});
