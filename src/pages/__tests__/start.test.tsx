import {render, screen} from '@testing-library/react';

import Start from '@app/pages/start.tsx';
import * as flagsmithClient from "@app/flagsmithClient.ts";

describe('Help', () => {
  it('shows "Start Page"', async () => {
    vi.spyOn(flagsmithClient, 'getFlagValue').mockReturnValue(false);

    render(<Start/>)

    expect(screen.getByText('Start Page')).toBeInTheDocument();
  });

  it('shows "infoWidget" if pluginC is active', async () => {
    vi.spyOn(flagsmithClient, 'getFlagValue').mockImplementation((flagName) => {
      return flagName === 'plugin_c';
    });

    render(<Start/>)

    expect(screen.getByText('Widget Title')).toBeInTheDocument();
  });
});
