import { fireEvent, render, screen } from '@testing-library/react';

// Component
import { PasswordInput } from '../index';

describe('PasswordInput component', () => {
  const placeholderText = 'Enter your password';
  it('should render properly', () => {
    const container = render(<PasswordInput />);
    expect(container).toMatchSnapshot();
  });

  it('should toggle password visibility on icon press', () => {
    render(<PasswordInput placeholder={placeholderText} />);

    const toggleButton = screen.getByRole('button');
    const input = screen.getByPlaceholderText(
      'Enter your password',
    ) as HTMLInputElement;

    fireEvent.click(toggleButton);
    expect(input.type).toBe('text');

    fireEvent.click(toggleButton);
    expect(input.type).toBe('password');
  });
});
