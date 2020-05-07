const http = require('http');

const readFile = (URL, callback) => {
  let body = '';

  console.log(URL);
  http.get(URL, response => {
    response.on('data', chunk => {
      body += chunk;
    });

    response.on('end', () => {
      console.log(body);
      callback.call(null, body);
    });
  });
};

module.exports = { readFile }