import {render, screen} from '@testing-library/react';

import Admin from '@app/pages/admin.tsx';

describe('Admin', () => {
  it('shows "Admin Page"', async () => {
    render(<Admin/>)

    expect(screen.getByText('Admin Page')).toBeInTheDocument();
  });
});
