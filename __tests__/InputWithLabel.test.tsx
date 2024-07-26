import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InputWithLabel } from '@/components/ui/Form/InputWithLabel/InputWithLabel';

describe('InputWithLabel', () => {
  it('renders the label and input', () => {
    render(<InputWithLabel label="Test Label" id="test-input" />);
    
    const label = screen.getByText('Test Label');
    expect(label).toBeInTheDocument();
    
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('applies custom className to input', () => {
    render(<InputWithLabel label="Test Label" id="test-input" className="custom-class" />);
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('custom-class');
  });

  it('applies custom labelClassName to label', () => {
    render(<InputWithLabel label="Test Label" id="test-input" labelClassName="custom-label-class" />);
    
    const label = screen.getByText('Test Label');
    expect(label).toHaveClass('custom-label-class');
  });

  it('forwards ref to input element', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<InputWithLabel label="Test Label" id="test-input" ref={ref} />);
    
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('passes other props to input element', () => {
    render(<InputWithLabel label="Test Label" id="test-input" placeholder="Enter text" />);
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('placeholder', 'Enter text');
  });

  it('sets the correct type on the input', () => {
    render(<InputWithLabel label="Test Label" id="test-input" type="password" />);
    
    const input = screen.getByLabelText('Test Label');
    expect(input).toHaveAttribute('type', 'password');
  });

  it('connects label to input using htmlFor and id', () => {
    render(<InputWithLabel label="Test Label" id="test-input" />);
    
    const label = screen.getByText('Test Label');
    expect(label).toHaveAttribute('for', 'test-input');
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('id', 'test-input');
  });
});