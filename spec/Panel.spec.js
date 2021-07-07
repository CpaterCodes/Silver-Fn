import Panel from '../src/Panel.svelte';
import { render } from '@testing-library/svelte';
import { cod } from './assets/fishObjects.js';

it('will present names in a clear format', () => {
  const panel = render(Panel, cod);
  expect(panel.getByText(/Atlantic Cod/i));
  expect(panel.getByText(/Gadus Morhua/i));
});

it('will have an image', () => {
  const panel = render(Panel, cod);
  expect(panel.getByRole('img')).toHaveAttribute('src', cod.img);
});
