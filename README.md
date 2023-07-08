# BI Final Project DML Generator

This project allows you to create `DML` scripts for data insertion into the `airplane` and `flight` tables of MySQL and PostgreSQL respectively.


## Used Dependencies
- faker-js: for generating fake information
- csv-parser: for reading the CSV file `IATA Codes.csv`, so that the `origin` and `destination` fields of the `flight` table use the codes found in the CSV file

## Program Execution

First, you need to install the project dependencies using the following command, according to your favorite Node package manager:

**npm**
```bash
npm install
```
**yarn**
```bash
yarn install
```
**pnpm**
```bash
pnpm install
```

To configure the environment variables, create a file named `.env` in the project's root directory with the structure of the example file [.env.example](.env.example)
```env
AIRPLANES_COUNT = 10
FLIGHTS_COUNT = 50
RESULT_FILES_BASE_PATH = './generated' 
CSV_PATH = './resources/IATA Codes.csv'
MULTIPLE_INSERTS = true
```
Where `AIRPLANES_COUNT` is the number of airplane records you want to create, `FLIGHTS_COUNT` is the number of flight records you want to create, `RESULT_FILES_BASE_PATH` is the path to the folder where the scripts will be saved, `CSV_PATH` is the path to the IATA Codes.csv file and `MULTIPLE_INSERTS` is the boolean value that allows defining wheter the scripts execute a single insert for all records or one insert per record.

Once the environment variables are configured, run the program with the following command:

**npm**
```bash
npm start
```
**yarn**
```bash
yarn start
```
**pnpm**
```bash
pnpm start
```
After the program finishes executing, you will find the `airplanes.sql` and `flights.sql` scripts for inserting the data into their respective tables in the databases.