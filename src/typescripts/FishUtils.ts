import { create } from 'apisauce';
import { croaker } from '../assets/croaker';

export type Fish = {
  genus: string,
  species: string,
  name: string,
  img: string
};

const api = create({
  baseURL: 'https://fishbase.ropensci.org/species'
});

export const getFish = async () : Promise<Fish> => {
  const Id = Math.floor(Math.random() * 13000) + 1;
  console.log(`Attempting to retrieve fish record ${Id} from FishBase`);
  const fishRecord = await api.get(`/${Id}?`);
  if (fishRecord.problem) {
    console.log(`${fishRecord.problem}`);
    return croaker;
  }
  const { Genus, Species, FBname, image } = fishRecord.data[0];

  return { genus: Genus, species: Species, name: FBname, img: image };
};
