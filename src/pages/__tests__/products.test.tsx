import {render, screen} from '@testing-library/react';

import Products from '@app/pages/products.tsx';

describe('products', () => {
  it('shows "Produkte Page"', async () => {
    render(<Products/>)

    expect(screen.getByText('Produkte Page')).toBeInTheDocument();
  });
});
