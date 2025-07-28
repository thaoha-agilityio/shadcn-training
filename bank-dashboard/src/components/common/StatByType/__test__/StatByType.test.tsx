import { render } from '@testing-library/react';

// Components
import { StatByType } from '..';

import { PRICE_TYPE } from '@/constants';

describe('StatByType component', () => {
  const mockProps = {
    total: 100,
    label: 'balance',
    type: PRICE_TYPE.BALANCE,
  };

  it('should render the StatByType correctly', () => {
    const { container } = render(<StatByType {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  it('applies the correct background class for the icon', () => {
    const { container } = render(<StatByType {...mockProps} />);

    // Check if the correct background class is applied
    const iconContainer = container.querySelector('.rounded-full');
    expect(iconContainer).toHaveClass('bg-bg-balance');
  });
});
