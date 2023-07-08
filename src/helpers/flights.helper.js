export const getFlightsQueryWhitOneInsert = (flights) => {
  const query = `INSERT INTO detail.flight (id, airplane, origin, destination, departure, arrival, flightMiles) VALUES\n`;

  return flights.reduce((acc, flight, index) => {
    const values = `(${index+1}, ${flight.airplane}, '${flight.origin}', '${flight.destination}', '${flight.departure.toISOString().slice(0, 19).replace('T', ' ')}', '${flight.arrival.toISOString().slice(0, 19).replace('T', ' ')}', ${flight.flightMiles})`;

    if (index === flights.length - 1) {
      return acc + values + ';';
    }

    return acc + values + ',\n';
  }, query);
};

export const getFlightsQueryWhitMultipleInserts = (flights) => {
  const query = "";
  
  return flights.reduce((acc, flight, index) => {
    return acc + `INSERT INTO detail.flight (id, airplane, origin, destination, departure, arrival, flightMiles) VALUES (${index+1}, ${flight.airplane}, '${flight.origin}', '${flight.destination}', '${flight.departure.toISOString().slice(0, 19).replace('T', ' ')}', '${flight.arrival.toISOString().slice(0, 19).replace('T', ' ')}', ${flight.flightMiles});\n`;
  } , query);
}