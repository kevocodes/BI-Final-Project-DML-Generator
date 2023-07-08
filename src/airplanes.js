import { faker } from '@faker-js/faker';
import { config } from '../src/config/index.js'
import { getAirplanesQueryWhitOneInsert, getAirplanesQueryWhitMultipleInserts } from './helpers/airplanes.helper.js'


export const createAirplane = () => {
  const idCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

  return {
    code: faker.string.fromCharacters(idCharacters, 6),
    model: faker.airline.airplane().name.slice(0, 10).trim(),
    year: faker.number.int({ min: 1940, max: 2023}),
  }
}

export const getAirplanes = () => {
  const count = config.airplanesCount;

  const airplanes = [];

  for (let i = 0; i < count; i++) {
    const airplane = createAirplane();

    if (airplanes.find(a => a.code === airplane.code)) {
      i--;
      continue;
    }

    airplanes.push(airplane);
  }

  return airplanes;
}

export const generateAirplanesQuery = (airplanes) => {
  if(config.multipleInserts) {
    return getAirplanesQueryWhitMultipleInserts(airplanes);
  }

  return getAirplanesQueryWhitOneInsert(airplanes);
};