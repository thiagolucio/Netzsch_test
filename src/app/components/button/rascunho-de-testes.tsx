import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '.';

describe('Button Component', () => {
  const defaultProps = {
    variant: 'default' as const,
    type: 'button' as const,
    children: 'Click me',
    testID: 'button-test',
  };

  test('renders with default props', () => {
    render(<Button {...defaultProps} />);
    const buttonElement = screen.getByTestId(defaultProps.testID);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Click me');
  });

  test('renders with different variant', () => {
    const { rerender } = render(<Button {...defaultProps} />);
    const buttonElement = screen.getByTestId(defaultProps.testID);
    expect(buttonElement).toHaveClass('bg-gray-100');

    rerender(<Button {...defaultProps} variant="primary" />);
    expect(buttonElement).toHaveClass('bg-primary');
  });

  test('handles click event', () => {
    const onClickMock = jest.fn();
    render(<Button {...defaultProps} onClick={onClickMock} />);
    
    const buttonElement = screen.getByTestId(defaultProps.testID);
    fireEvent.click(buttonElement);
    
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

});