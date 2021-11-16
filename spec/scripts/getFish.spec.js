import { getFish } from '../../src/typescripts/fishUtils';

it('Can retrieve a fish', () => {
  const fish = getFish();
  expect(fish.genus);
  expect(fish.species);
  expect(fish.name);
  expect(fish.image);
});
