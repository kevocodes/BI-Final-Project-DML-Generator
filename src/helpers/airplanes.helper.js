export const getAirplanesQueryWhitOneInsert = (airplanes) => {
  const query = `INSERT INTO airplane (id, code, model, year) VALUES\n`;
  
  return airplanes.reduce((acc, airplane, index) => {
    const values = `(${index+1}, '${airplane.code}', '${airplane.model}', ${airplane.year})`;

    if (index === airplanes.length - 1) {
      return acc + values + ';';
    }

    return acc + values + ',\n';
  }, query);
};

export const getAirplanesQueryWhitMultipleInserts = (airplanes) => {
  const query = "";
  
  return airplanes.reduce((acc, airplane, index) => {
    return acc + `INSERT INTO airplane (id, code, model, year) VALUES (${index+1},'${airplane.code}', '${airplane.model}', ${airplane.year});\n`;
  }, query);
}