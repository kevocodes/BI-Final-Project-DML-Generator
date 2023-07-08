import { faker } from '@faker-js/faker';
import { config } from '../src/config/index.js'
import { getRandomNumber } from "./utils/random.util.js"
import { getIataCodes } from "./csv-codes.js"
import { getMappedIataCode } from "./helpers/csv.helper.js"
import { getFlightsQueryWhitMultipleInserts, getFlightsQueryWhitOneInsert} from "./helpers/flights.helper.js"

export const createFlight = (airplane, destination, origin) => {
  return {
    airplane,
    origin,
    destination,
    departure: faker.date.recent({days: 30}),
    arrival: faker.date.soon({days: 30}),
    flightMiles: faker.number.int({ min: 1, max: 600}) * 50,
  }
}

export const getFlights = async (airplanes) => {
  const flights = [];
  const count = config.flightsCount;

  const iataCodes = await getIataCodes(config.csvFile);

  for (let i = 0; i < count; i++) {
    const airplaneId = getRandomNumber(1, airplanes.length);

    const originIndex = getRandomNumber(0, iataCodes.length - 1);
    const destinationIndex = getRandomNumber(0, iataCodes.length - 1);

    const origin = getMappedIataCode(originIndex, iataCodes).slice(0, 3).trim();
    const destination = getMappedIataCode(destinationIndex, iataCodes).slice(0, 3).trim();

    //This is for debugging purposes: validate that the origin index and destination index are correct
    // console.log(`index: ${originIndex}, origin: ${origin} -> ${iataCodes.map((code)=> code.Code).indexOf(origin)}}`)
    // console.log(`index: ${destinationIndex}, destination: ${destination}  -> ${iataCodes.map((code)=> code.Code).indexOf(destination)}}`)
    // console.log('-------------------')

    const flight = createFlight(airplaneId, destination, origin);
    flights.push(flight);
  }

  return flights;
}  

export const generateFlightsQuery = (flights) => {
  if (config.multipleInserts) {
    return getFlightsQueryWhitMultipleInserts(flights);
  }
  
  return getFlightsQueryWhitOneInsert(flights);
}