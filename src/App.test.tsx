import {render, screen} from '@testing-library/react';
import App from "./App.tsx";
import {getFlagValue} from '../flagsmithClient.ts';

// Mock Flagsmith
vi.mock('../flagsmithClient.ts', () => ({
    getFlagValue: vi.fn(),
}));


describe('App', () => {
    it('shows enabled content when flag is true', async () => {
        (getFlagValue as any).mockReturnValue(true);

        render(<App />);

        expect(screen.getByText('Plugin A status is: enabled')).toBeInTheDocument();
    });

    it('shows disabled content when flag is false', async () => {
        (getFlagValue as any).mockReturnValue(false);

        render(<App />);

        expect(screen.getByText('Plugin A status is: disabled')).toBeInTheDocument();
    });
});
