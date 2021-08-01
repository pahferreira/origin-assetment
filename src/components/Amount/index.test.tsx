// React
import React from 'react';

// Libraries
import { fireEvent, render } from 'lib/testing-library';

// Custom
import Amount from './index';

describe('Amount Component', () => {
  it('Render and Format', () => {
    const onChange = jest.fn();
    const label = 'Test';
    const { getByText, getByTestId } = render(
      <Amount label={label} onChange={onChange} />
    );
    const input = getByTestId('amountInput');

    expect(getByText(label)).toBeTruthy();
    fireEvent.change(input, { target: { value: '3500.45' } });
    expect(input.getAttribute('value')).toBe('3,500.45');
    expect(onChange).toBeCalled();
  });
});
