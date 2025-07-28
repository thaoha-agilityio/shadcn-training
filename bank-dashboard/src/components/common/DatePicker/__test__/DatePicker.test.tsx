import { render } from '@testing-library/react';

import { DatePicker } from '..';

const mockProps = {
  value: new Date(),
  onSelect: jest.fn(),
};
describe('DatePicker component', () => {
  it('renders a DatePicker is correct', () => {
    const container = render(<DatePicker {...mockProps} />);
    expect(container).toMatchSnapshot();
  });
});
