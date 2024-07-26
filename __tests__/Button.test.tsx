import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button, ButtonProps } from '@/components/ui/Form/Button/Button';

// Mock the cn function
jest.mock('../lib/utils', () => ({
  cn: (...inputs: any[]) => inputs.filter(Boolean).join(' '),
}));

describe('Button', () => {
  const renderButton = (props: ButtonProps & React.HTMLAttributes<HTMLButtonElement> = {}) => {
    return render(<Button {...props}>Click me</Button>);
  };

  it('renders a button with default props', () => {
    renderButton();
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary text-primary-foreground hover:bg-primary/90');
    expect(button).toHaveClass('h-10 px-4 py-2');
  });

  it('applies variant classes correctly', () => {
    renderButton({ variant: 'destructive' });
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toHaveClass('bg-destructive text-destructive-foreground hover:bg-destructive/90');
  });

  it('applies size classes correctly', () => {
    renderButton({ size: 'sm' });
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toHaveClass('h-9 rounded-md px-3');
  });

  it('combines custom className with variant classes', () => {
    renderButton({ className: 'custom-class' });
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toHaveClass('custom-class');
    expect(button).toHaveClass('bg-primary text-primary-foreground hover:bg-primary/90');
  });

  it('renders as a child component when asChild is true', () => {
    render(
      <Button asChild>
        <a href="https://example.com">Link Button</a>
      </Button>
    );
    const link = screen.getByRole('link', { name: 'Link Button' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('bg-primary text-primary-foreground hover:bg-primary/90');
  });

  it('forwards ref to the button element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Click me</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('passes additional props to the button element', () => {
    renderButton({ 'data-testid': 'test-button' } as ButtonProps & React.HTMLAttributes<HTMLButtonElement>);
    const button = screen.getByTestId('test-button');
    expect(button).toBeInTheDocument();
  });
});