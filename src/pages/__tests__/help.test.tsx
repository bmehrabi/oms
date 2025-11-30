import {render, screen} from '@testing-library/react';

import Help from '@app/pages/help.tsx';

describe('Help', () => {
  it('shows "Help Page"', async () => {
    render(<Help/>)

    expect(screen.getByText('Help Page')).toBeInTheDocument();
  });
});
