import { newFish } from '../../src/typescripts/fishUtils';

it('Can retrieve a fish', () => {
  const fish = newFish();
  expect(fish.genus);
  expect(fish.species);
  expect(fish.name);
  expect(fish.image);
});
