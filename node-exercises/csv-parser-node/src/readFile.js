const http = require('http');
import { splitEnter } from './splitEnter'

const readFile = (URL, callback) => {
  http.get(URL, response => {
    response.pipe(new splitEnter()).pipe(res);
  });
};

module.exports = { readFile }