import { render } from '@testing-library/react';

// Components
import { Label } from '..';

describe('Label Component', () => {
  it('Should render Label Component correctly', () => {
    const component = render(<Label>Username</Label>);

    expect(component).toMatchSnapshot();
  });
});
