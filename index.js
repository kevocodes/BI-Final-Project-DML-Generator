import { getAirplanes, generateAirplanesQuery } from "./src/airplanes.js";
import { getFlights, generateFlightsQuery } from "./src/flights.js";
import { writeFile, createFolder } from "./src/utils/file.util.js"
import { config } from "./src/config/index.js"

const main = async () => {
  try {
    const airplanes = getAirplanes();
    const airplanesQuery = generateAirplanesQuery(airplanes);

    const flights = await getFlights(airplanes);
    const flightsQuery = generateFlightsQuery(flights);

    createFolder(config.scriptsBasePath);
    writeFile(`${config.scriptsBasePath}/airplanes.sql`, airplanesQuery);
    writeFile(`${config.scriptsBasePath}/flights.sql`, flightsQuery);

    console.log(`Done! Check the ${config.scriptsBasePath} folder for the SQL files.\nAirplanes generated: ${airplanes.length}\nFlights generated: ${flights.length}`);
  } catch (error) {
    console.error(error);
  }
};

main();
