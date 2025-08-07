import { render } from '@testing-library/react';

// Components
import { Switch } from '..';

describe('Switch Component', () => {
  it('Should render Input Component correctly', () => {
    const component = render(<Switch />);

    expect(component).toMatchSnapshot();
  });
});
