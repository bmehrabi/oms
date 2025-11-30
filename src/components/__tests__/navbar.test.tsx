import {render, screen} from '@testing-library/react';
import MainLayout from '@app/mainLayout.tsx';
import {MemoryRouter} from 'react-router-dom';
import * as flagsmithClient from '@app/flagsmithClient';

// Mock Flagsmith
vi.mock('@app/flagsmithClient', () => ({
  getFlagValue: vi.fn(),
}));

const setup = () => render(
  <MemoryRouter>
    <MainLayout/>
  </MemoryRouter>
);

describe('Navbar', () => {
  it('shows website title', async () => {
    setup();

    expect(screen.getByText('Online Management System')).toBeInTheDocument();
  });

  it('shows "Start", "Produkte", "User", "Hilfe" menus if pluginA is active', () => {
    vi.spyOn(flagsmithClient, 'getFlagValue').mockImplementation((flagName) => {
      return flagName === 'plugin_a';
    });

    setup();

    expect(screen.getByText('Start')).toBeInTheDocument();
    expect(screen.getByText('Produkte')).toBeInTheDocument();
    expect(screen.getByText('User')).toBeInTheDocument();
    expect(screen.getByText('Hilfe')).toBeInTheDocument();
  });

  it('does not show "Start", "Produkte", "User", "Hilfe" menus if pluginA is not active', async () => {
    vi.spyOn(flagsmithClient, 'getFlagValue').mockReturnValue(false);

    setup();

    expect(screen.queryAllByText('Start')).toHaveLength(0);
    expect(screen.queryAllByText('Produkte')).toHaveLength(0);
    expect(screen.queryAllByText('User')).toHaveLength(0);
    expect(screen.queryAllByText('Hilfe')).toHaveLength(0);
  });

  it('shows "Admin" menu if pluginB is active', () => {
    vi.spyOn(flagsmithClient, 'getFlagValue').mockImplementation((flagName) => {
      return flagName === 'plugin_b';
    });

    setup();

    expect(screen.getByText('Admin')).toBeInTheDocument();
  });

  it('does not show "Admin" menu if pluginB is not active', () => {
    vi.spyOn(flagsmithClient, 'getFlagValue').mockReturnValue(false);

    setup();

    expect(screen.queryAllByText('Admin')).toHaveLength(0);
  });

});
