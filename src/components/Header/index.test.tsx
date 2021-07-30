// React
import React from 'react';

// Libraries
import { render } from 'lib/testing-library';

// Custom
import Header from './index';

describe('Header Component', () => {
  it('Render', () => {
    const { container } = render(<Header logoUrl="" />);

    expect(container).toBeTruthy();
    expect(container.firstChild?.firstChild).toBeInstanceOf(HTMLImageElement);
  });
});
