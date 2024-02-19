import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
// import userEvent from '@testing-library/user-event';
import Logo from './';

describe('Logo Component', () => {
    test('Render the vertical logo', () => {
      render(<Logo width={130} height={25} textSize={22} comaSize={5} logoLayout={true} sloganLayout={true} />);
    });
  
    test('Render the Horizontal logo', () => {
      render(<Logo width={140} height={35} textSize={18} comaSize={3} logoLayout={false} sloganLayout={true} />);
    });

    test('Render whithout slogan', () => {
      render(<Logo width={110} height={18} textSize={16} comaSize={6} logoLayout={false} sloganLayout={false} />);
    });
  
  });