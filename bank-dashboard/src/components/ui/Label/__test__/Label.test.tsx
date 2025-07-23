import { render } from '@testing-library/react';

// Components
import { Label } from '..';

describe('Input Component', () => {
  it('Should render Input Component correctly', () => {
    const component = render(<Label>Username</Label>);

    expect(component).toMatchSnapshot();
  });
});
