export const parseRow = (row) => {
  let rowMapped;

  const [Location, Country, Code, InconsistentColumn] = Object.values(row);

  if (InconsistentColumn) {
    rowMapped = {
      Location: Location + Country,
      Code: InconsistentColumn,
    };
  } else {
    rowMapped = {
      Location,
      Code,
    };
  }

  return rowMapped;
};

export const getMappedIataCode = (index, iataCodes) => {
  const code = iataCodes[index].Code;

  return code;
}
