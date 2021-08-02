// React
import React from 'react';

// Libraries
import { fireEvent, render } from 'lib/testing-library';

// Custom
import Button from './index';

describe('Button Component', () => {
  it('Render', () => {
    const onClick = jest.fn();
    const { container, getByText } = render(
      <Button onClick={onClick}>Test</Button>
    );

    expect(getByText('Test')).toBeTruthy();
    if (container.firstElementChild) {
      fireEvent.click(container.firstElementChild);
    }
    expect(onClick).toBeCalled();
  });
});
