import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator/Calculator';

test('should do a simple (+) operation and display the correct result', () => {
    const { getByTestId } = render(<Calculator/>);
    fireEvent.click(getByTestId('1'));
    fireEvent.click(getByTestId('+'));
    fireEvent.click(getByTestId('2'));
    fireEvent.click(getByTestId('='));
    expect(getByTestId('screen')).toHaveTextContent('3')
});

test('should do a simple (-) operation and display the correct result', () => {
    const { getByTestId } = render(<Calculator/>);
    fireEvent.click(getByTestId('1'));
    fireEvent.click(getByTestId('-'));
    fireEvent.click(getByTestId('2'));
    fireEvent.click(getByTestId('='));
    expect(getByTestId('screen')).toHaveTextContent('-1')
});

test('should do a simple (/) operation and display the correct result', () => {
    const { getByTestId } = render(<Calculator/>);
    fireEvent.click(getByTestId('1'));
    fireEvent.click(getByTestId('/'));
    fireEvent.click(getByTestId('2'));
    fireEvent.click(getByTestId('='));
    expect(getByTestId('screen')).toHaveTextContent('0.5')
});

test('should do a simple (*) operation and display the correct result', () => {
    const { getByTestId } = render(<Calculator/>);
    fireEvent.click(getByTestId('1'));
    fireEvent.click(getByTestId('*'));
    fireEvent.click(getByTestId('2'));
    fireEvent.click(getByTestId('='));
    expect(getByTestId('screen')).toHaveTextContent('2')
});

test('should do an invalid operation and display must be empty', () => {
    const { getByTestId } = render(<Calculator/>);
    fireEvent.click(getByTestId('*'));
    fireEvent.click(getByTestId('/'));
    fireEvent.click(getByTestId('='));
    expect(getByTestId('screen')).toHaveTextContent('NaN')
});

test('should do a simple operation and clear the screen', () => {
    const { getByTestId } = render(<Calculator/>);
    fireEvent.click(getByTestId('3'));
    fireEvent.click(getByTestId('*'));
    fireEvent.click(getByTestId('3'));
    fireEvent.click(getByTestId('='));
    fireEvent.click(getByTestId('clear'));
    expect(getByTestId('screen')).toHaveTextContent('')
});



