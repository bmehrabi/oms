import {render, screen} from '@testing-library/react';
import {InfoWidget} from '@app/components/infoWidget.tsx';

describe('InfoWidget', () => {
  it('renders the widget title', () => {
    render(<InfoWidget/>);

    expect(screen.getByText('Widget Title')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<InfoWidget/>);

    expect(
      screen.getByText('This is a small description inside the widget.')
    ).toBeInTheDocument();
  });

  it('renders the action button', () => {
    render(<InfoWidget/>);

    const button = screen.getByRole('button', {name: 'Action'});
    expect(button).toBeInTheDocument();
  });
});
