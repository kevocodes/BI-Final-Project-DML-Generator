import dotenv from "dotenv";
dotenv.config();

export const config = {
  airplanesCount: process.env.AIRPLANES_COUNT || 100,
  flightsCount: process.env.FLIGHTS_COUNT || 500,
  scriptsBasePath: process.env.RESULT_FILES_BASE_PATH || "./generated",
  csvFile: process.env.CSV_PATH || "./resources/airports.csv",
  multipleInserts: process.env.MULTIPLE_INSERTS.toLowerCase() === "true" || false,
};
