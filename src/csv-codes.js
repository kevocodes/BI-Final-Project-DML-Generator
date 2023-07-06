import parser from "csv-parser";
import fs from "fs";
import { parseRow } from "./helpers/csv.helper.js";

export const getIataCodes = (csvFile) => {
  const codes = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(csvFile)
      .on("error", (error) => reject(error))
      .pipe(parser())
      .on("data", (row) => {
        codes.push(parseRow(row));
      })
      .on("end", () => {
        resolve(codes);
      });
  });
};
