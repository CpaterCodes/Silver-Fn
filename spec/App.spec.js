import App from '../src/App.svelte';
import { render } from '@testing-library/svelte';

it('Introduces the application', () => {
  const app = render(App);
  expect(app.getByText(/Silver-Fn/i));
});
