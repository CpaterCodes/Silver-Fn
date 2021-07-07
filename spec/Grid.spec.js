import Grid from '../src/Grid.svelte';
import { render } from '@testing-library/svelte';
import { cod, grouper, sandeel, croaker } from './assets/fishObjects.js';

it('will take information and make a grid of it', () => {
  const grid = render(Grid, {
    species: [grouper, sandeel, croaker]
  });
  expect(grid.getByText(/Red Grouper/i));
  expect(grid.getByText(/Geelbeck Croaker/i));
  expect(grid.getByText(/Small Sandeel/i));
});
