import Grid from '../src/Grid.svelte';
import { render } from '@testing-library/svelte';

it('will take information and make a grid of it', () => {
  const grid = render(Grid);
  expect(grid.getByText('bar'));
});
