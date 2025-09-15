import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { expect, it } from 'vitest';

// Components
import Layout from '@core/app/Layout';

it('Render Layout', () => {
  const { getByText } = render(<Layout />);
  expect(getByText(/PixaBay Finder/)).toBeInTheDocument();
});
