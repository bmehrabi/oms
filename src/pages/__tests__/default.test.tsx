import {render, screen} from '@testing-library/react';

import Default from '@app/pages/default.tsx';

describe('Default', () => {
  it('shows "Default Page"', async () => {
    render(<Default/>);

    expect(screen.getByText('Default Page')).toBeInTheDocument();
  });

  it('shows description text for the page', () => {
    render(<Default/>);

    expect(
      screen.getByText('This will be the default page. By default, all plugins are deactivated.')
    ).toBeInTheDocument();

    expect(
      screen.getByText('So, no menu entry should be shown. You can enable the plugins in this link:')
    ).toBeInTheDocument();
  });

  it('shows a link to flag smith admin panel', () => {
    render(<Default/>);

    const link = screen.getByRole('link', {name: 'Flagsmith Admin Panel'});
    expect(link).toBeInTheDocument();

    // 3. Check link URL
    expect(link).toHaveAttribute('href',
      'https://app.flagsmith.com/project/32138/environment/mr2uM9WjWmW2BGYkZpcEoY/features?is_archived=false&tag_strategy=INTERSECTION&page=1&search=&sortBy=name&sortOrder=asc');
  });
});
