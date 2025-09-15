import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';

// Components
import App from '@core/containers/App';

it('Render App', () => {
  const { getByText } = render(<App />);
  expect(getByText(/PixaBay Finder/)).toBeInTheDocument();
});
