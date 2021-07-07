import Panel from '../src/Panel.svelte';
import { render } from '@testing-library/svelte';

it('Will present a spread of information in a clear format', () => {
  const panel = render(Panel, {
    genus: "Gadus",
    species: "Morhua",
    name: "Atlantic Cod",
    img: "./assets/cod.jpg"
  });
  expect(panel.getByText(/Atlantic Cod/i));
  expect(panel.getByText(/Gadus Morhua/i));
});
