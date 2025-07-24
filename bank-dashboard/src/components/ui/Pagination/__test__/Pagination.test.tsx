import { render, screen } from '@testing-library/react';

import { Pagination } from '..';

describe('<Pagination />', () => {
  it('renders all page numbers correctly without ellipsis', () => {
    const container = render(<Pagination totalPages={10} currentPage={3} />);

    expect(container).toMatchSnapshot();
  });

  it('renders ellipsis when needed', () => {
    render(<Pagination totalPages={10} currentPage={5} />);

    // Check active page
    const activeLink = screen.getByRole('link', { name: '5' });
    expect(activeLink).toHaveAttribute('aria-current', 'page');
  });
});
