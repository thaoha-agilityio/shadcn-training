import { render, screen } from '@testing-library/react';
import { MyCard } from '..';

describe('MyCard Component', () => {
  const props = {
    username: 'John Doe',
    totalBalance: 1234.56,
    validDate: '12/29',
    cardNumber: '3778123412341234',
  };

  it('renders card with default (white) theme', () => {
    render(<MyCard {...props} isColor={false} />);

    expect(screen.getByText('3778 **** **** 1234')).toBeInTheDocument();
  });

  it('renders card with colored gradient theme', () => {
    const container = render(<MyCard {...props} isColor={true} />);

    expect(container).toMatchSnapshot();
  });
});
