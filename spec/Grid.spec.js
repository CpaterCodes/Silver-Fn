import Grid from '../src/Grid.svelte';
import { render, fireEvent } from '@testing-library/svelte';
import { cod, grouper, sandeel, croaker } from './assets/fishObjects.js';

let mockFish = jest.fn();

mockFish.mockReturnValueOnce(grouper)
.mockReturnValueOnce(croaker)
.mockReturnValueOnce(sandeel);

it('will take information and make a grid of it', async () => {

  const grid = await render(Grid, { getFish: mockFish });
  const button = await grid.findByRole('button');
  fireEvent.click(button);
  expect(await grid.findByText(/Red Grouper/i));
  fireEvent.click(button);
  expect(await grid.findByText(/Geelbeck Croaker/i));
  fireEvent.click(button);
  expect(await grid.findByText(/Small Sandeel/i));
});
