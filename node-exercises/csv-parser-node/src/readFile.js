const http = require('http');

const readFile = (URL, res) => {
  http.get(URL, response => {
    response.pipe(res);
  });
};

module.exports = { readFile }