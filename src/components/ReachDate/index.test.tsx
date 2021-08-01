// React
import React from 'react';

// Libraries
import moment from 'moment';
import { fireEvent, render } from 'lib/testing-library';

// Custom
import ReachDate from './index';

describe('ReachDate Component', () => {
  it('Render', () => {
    const onClickLeft = jest.fn();
    const onClickRight = jest.fn();
    const value = moment('2025-02-20').toISOString();
    const label = 'Test';
    const { getByText, getByTestId } = render(
      <ReachDate
        label={label}
        onClickLeft={onClickLeft}
        onClickRight={onClickRight}
        value={value}
      />
    );
    const leftButton = getByTestId('leftButton');
    const rightButton = getByTestId('rightButton');

    expect(getByText(label)).toBeTruthy();
    expect(getByText('2025')).toBeTruthy();
    expect(getByText('February')).toBeTruthy();
    fireEvent.click(leftButton);
    expect(onClickLeft).toBeCalled();
    fireEvent.click(rightButton);
    expect(onClickRight).toBeCalled();
  });
});
