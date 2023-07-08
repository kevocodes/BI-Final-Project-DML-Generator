# BI Final Project DML Generator

Este proyecto permite crear los scripts `DML` para la inserción de datos en las tablas `airplane` y `flight` de MySQL y PostgreSQL respectivamente.


## Dependencias utilizadas
- faker-js: para la autogeneración de información ficticia
- csv-parser: para la lectura del archivo CSV `IATA Codes.csv`, de tal forma que el campo `origin` y `destination` de la tabla `flight` utilicen los codigos que se encuentran en el archivo CSV

## Ejecución de programa

Primero debes instalar las dependencias para el proyecto con el siguiente comando según tu administrador de paquetes de Node favorito:

**npm**
```bash
npm installl
```
**yarn**
```bash
yarn installl
```
**pnpm**
```bash
pnpm installl
```

Para configurar las variables de entorno crea un archivo llamado `.env` en la raiz del proyecto con la estructura del archivo de ejemplo [.env.example](.env.example).
```env
AIRPLANES_COUNT = 10
FLIGHTS_COUNT = 50
RESULT_FILES_BASE_PATH = './generated' 
CSV_PATH = './resources/IATA Codes.csv'
MULTIPLE_INSERTS = true
```
Siendo `AIRPLANES_COUNT` la cantidad de registros de aviones que se desean crear, `FLIGHTS_COUNT` la cantidad de registros de vuelos que se desean crear, `RESULT_FILES_BASE_PATH` la ruta de la carpeta donde se guardarán los scripts, `CSV_PATH` la ruta donde se encuentra el archivo IATA Codes.csv y `MULTIPLE_INSERTS` es el valor booleano que permite definir si los scripts ejecutan un solo insert para todos los registros o un insert por cada registro.


Una vez configuradas las variables de entorno, entonces ejecuta el programa con el comando:

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
Al finalizar la ejecución del programa encontrarás los scripts `airplanes.sql` y `flights.sql` para realizaar la inserción de los datos en sus respectivas tablas de las bases de datos.





