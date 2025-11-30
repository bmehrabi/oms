import {render, screen} from '@testing-library/react';

import Start from '@app/pages/start.tsx';

describe('Help', () => {
  it('shows "Start Page"', async () => {
    render(<Start/>)

    expect(screen.getByText('Start Page')).toBeInTheDocument();
  });
});
