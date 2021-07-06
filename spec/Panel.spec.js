import Panel from '../src/Panel.svelte';
import { render } from '@testing-library/svelte';

it('Will present a spread of information in a clear format', () => {
  const panel = render(Panel);
  expect(panel.getByText('bar'));
});
