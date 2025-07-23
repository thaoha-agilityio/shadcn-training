import { render, screen } from '@testing-library/react';
import { Search } from 'lucide-react';

// Components
import { Input } from '..';

describe('Input Component', () => {
  it('Should render Input Component correctly', () => {
    const component = render(
      <Input startContent={<Search />} placeholder="Search" />,
    );

    expect(component).toMatchSnapshot();
  });

  it('applies subtle variant class', () => {
    render(<Input label="Subtle" variant="subtle" placeholder="something" />);
    const input = screen.getByPlaceholderText('something');
    expect(input).toHaveClass('bg-subtle');
  });

  it('renders start and end content', () => {
    render(
      <Input
        label="Password"
        startContent={<span data-testid="start">S</span>}
        endContent={<span data-testid="end">E</span>}
      />,
    );
    expect(screen.getByTestId('start')).toBeInTheDocument();
    expect(screen.getByTestId('end')).toBeInTheDocument();
  });
});
