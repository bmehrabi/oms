import {render, screen} from '@testing-library/react';
import MainLayout from '@app/mainLayout.tsx';
import {MemoryRouter} from 'react-router-dom';
import {getFlagValue} from '@app/flagsmithClient';

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

  it('shows "Start", "Produkte", "User", "Hilfe" menus if pluginA is active', async () => {
    (getFlagValue as any).mockReturnValue(true);

    setup();

    expect(screen.getByText('Start')).toBeInTheDocument();
    expect(screen.getByText('Produkte')).toBeInTheDocument();
    expect(screen.getByText('User')).toBeInTheDocument();
    expect(screen.getByText('Hilfe')).toBeInTheDocument();
  });
});
