import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
// import userEvent from '@testing-library/user-event';
import Button from './';

describe('Button Component', () => {

  const handleClick = jest.fn();
  const children = "This is a Button"

  test('Render Button with variant "default"', () => {
    render(<Button variant="default" type="button">{children}</Button>);
    const buttonElement = screen.getByRole('button', { name: children });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('default');
  });


  test('Render Button with variant "primary"', () => {
    render(<Button variant="primary" type="button">{children}</Button>);
        const buttonElement = screen.getByRole('button', { name: children });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('primary');
  });

  test('Render Button with variant "alert"', () => {
    render(<Button variant="alert" type="button">{children}</Button>);
    const buttonElement = screen.getByRole('button', { name: children });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('alert');
  });


  test('Render Button with variant "success"', () => {
    render(<Button variant="success" type="button">{children}</Button>);
    const buttonElement = screen.getByRole('button', { name: children });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('success');
  });

  test('Render Button with variant "light"', () => {
    render(<Button variant="light" type="button">{children}</Button>);
    const buttonElement = screen.getByRole('button', { name: children });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('light');
  });


  test('Render Button with variant "disabled"', () => {
    render(<Button variant="disabled" type="button">{children}</Button>);
    const buttonElement = screen.getByRole('button', { name: children });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('disabled');
  });

  test('Callback onClick from button', () => {
    render(<Button onClick={handleClick} type="button" variant="default">{children}</Button>);
    const buttonElement = screen.getByRole('button', { name: children });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalled();
  });
});



