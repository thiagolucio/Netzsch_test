import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './';

describe('Render Button', () => {

  it(`Render Button Default`, () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button
        testID="Button-test"
        onClick={onPressMock} 
        variant={'default'} 
        type={'button'}>Button Default</Button>
    );
    expect(getByTestId('Button-test')).toBeTruthy();
    screen.getByText('Button Default');
    fireEvent.click(getByTestId('Button-test'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it(`Render Button Primary`, () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button
        testID="Button-test"
        onClick={onPressMock} 
        variant={'primary'} 
        type={'button'}>Button Primary</Button>
    );
    expect(getByTestId('Button-test')).toBeTruthy();
    screen.getByText('Button Primary');
    fireEvent.click(getByTestId('Button-test'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it(`Render Button Alert`, () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button
        testID="Button-test"
        onClick={onPressMock} 
        variant={'alert'} 
        type={'button'}>Button Alert</Button>
    );
    expect(getByTestId('Button-test')).toBeTruthy();
    screen.getByText('Button Alert');
    fireEvent.click(getByTestId('Button-test'));
    expect(onPressMock).toHaveBeenCalled();
  });


  it(`Render Button Success`, () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button
        testID="Button-test"
        onClick={onPressMock} 
        variant={'success'} 
        type={'button'}>Button Success</Button>
    );
    expect(getByTestId('Button-test')).toBeTruthy();
    screen.getByText('Button Success');
    fireEvent.click(getByTestId('Button-test'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it(`Render Button Light`, () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button
        testID="Button-test"
        onClick={onPressMock} 
        variant={'light'} 
        type={'button'}>Button Light</Button>
    );
    expect(getByTestId('Button-test')).toBeTruthy();
    screen.getByText('Button Light');
    fireEvent.click(getByTestId('Button-test'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it(`Render Button Disabled`, () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button
        testID="Button-test"
        onClick={onPressMock} 
        variant={'disabled'} 
        type={'button'}>Button Disabled</Button>
    );
    expect(getByTestId('Button-test')).toBeTruthy();
    screen.getByText('Button Disabled');
    fireEvent.click(getByTestId('Button-test'));
    expect(onPressMock).toHaveBeenCalled();
  });
});

