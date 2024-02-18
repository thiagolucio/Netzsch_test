import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Button from './';

describe('Button Component', () => {
  test('renderiza o botão com a variante "primary"', () => {
    render(<Button variant="primary" type="button">Clique Aqui</Button>);
    const buttonElement = screen.getByRole('button', { name: /clique aqui/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('primary');
  });

  test('renderiza o botão com a variante "alert"', () => {
    render(<Button variant="alert" type="button">Clique Aqui</Button>);
    const buttonElement = screen.getByRole('button', { name: /clique aqui/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('alert');
  });

  test('chama a função onClick ao clicar no botão', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} type="button" variant="default">Clique Aqui</Button>);
    const buttonElement = screen.getByRole('button', { name: /clique aqui/i });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalled();
  });
});



