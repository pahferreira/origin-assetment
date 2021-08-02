// React
import React from 'react';

// Libraries
import { fireEvent, render } from 'lib/testing-library';

// Custom
import Planner from './index';

describe('Planner Component', () => {
  it('Render and Function', () => {
    const { getByTestId, getByText } = render(<Planner />);
    const amountInput = getByTestId('amountInput');
    const rightButton = getByTestId('rightButton');

    fireEvent.change(amountInput, { target: { value: '2000' } });
    fireEvent.click(rightButton);
    expect(getByText('2,000')).toBeTruthy();
    expect(getByText('1,000')).toBeTruthy();
    expect(getByText('2 monthly deposits')).toBeTruthy();
  });
});
