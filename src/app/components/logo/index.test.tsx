import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
// import userEvent from '@testing-library/user-event';
import Logo from './';

describe('Logo Component', () => {
    test('renderiza o botão com a variante "primary"', () => {
      render(<Logo width={130} height={25} textSize={22} comaSize={5} logoLayout={true} sloganLayout={true} />);
    });
  
  });