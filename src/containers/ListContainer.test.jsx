import React from 'react';
import { render, screen } from '@testing-library/react';
import ListContainer from './ListContainer';

describe('ListContainer', () => {
  it('renders a list of characters to the page', async () => {
    await render(<ListContainer />);
    screen.getByAltText('loading spinner');
    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).toMatchSnapshot();
  });
});
