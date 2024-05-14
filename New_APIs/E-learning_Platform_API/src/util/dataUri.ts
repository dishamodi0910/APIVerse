import DatauriParser from 'datauri/parser.js';
import path from 'path';

const dataUri = (file) => {
  const parser = new DatauriParser();
  const fileName = path.extname(file.originalname).toString();
  return parser.format(fileName, file.buffer);
};

export default dataUri;
