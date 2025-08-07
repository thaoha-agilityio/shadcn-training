import { render } from '@testing-library/react';

import { Avatar } from '..';

describe('Avatar component', () => {
  it('renders a Avatar is correct', () => {
    const container = render(
      <Avatar
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        contentFallback="SC"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
