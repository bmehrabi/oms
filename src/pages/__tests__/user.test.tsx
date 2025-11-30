import {render, screen} from '@testing-library/react';

import User from '@app/pages/user.tsx';

describe('User', () => {
  it('shows "User Page"', async () => {
    render(<User/>)

    expect(screen.getByText('User Page')).toBeInTheDocument();
  });
});
