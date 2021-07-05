import App from '../src/App.svelte';
import { render } from '@testing-library/svelte';

it('Says something electrifying', () => {
  const app = render(App);
  const message = app.getByText("Let's rock, people!");
  expect(message).toBeInTheDocument();
});
