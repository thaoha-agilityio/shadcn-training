import { render, screen } from '@testing-library/react';
import { Button } from '..';

describe('Button component', () => {
  it('renders a button with default text', () => {
    const container = render(<Button>Click me</Button>);
    expect(container).toMatchSnapshot();
  });

  it('applies default variant and size classes', () => {
    const { container } = render(<Button>Test</Button>);
    const button = container.querySelector('button');

    expect(button?.className).toContain('bg-primary');
    expect(button?.className).toContain('h-9');
  });

  it('applies the "destructive" variant class', () => {
    const { container } = render(<Button variant="destructive">Delete</Button>);
    const button = container.querySelector('button');

    expect(button?.className).toContain('bg-destructive');
  });

  it('applies the "sm" size class', () => {
    const { container } = render(<Button size="sm">Small</Button>);
    const button = container.querySelector('button');

    expect(button?.className).toContain('h-8');
  });

  it('forwards props to the underlying element', () => {
    render(<Button data-testid="custom-button">Hello</Button>);
    expect(screen.getByTestId('custom-button')).toBeInTheDocument();
  });
});
