import fs from 'fs';

export const writeFile = (path, data) => {
  fs.writeFileSync(path, data, { encoding: 'utf-8' });
};

export const createFolder = (path) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
};