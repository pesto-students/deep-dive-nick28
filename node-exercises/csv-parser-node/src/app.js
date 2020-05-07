const http = require('http');
import { readFile } from './readFile';

// TODO: Test URL of CSV file
// const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
// const regex = new RegExp(expression);

const app = http.createServer((req, res) => {
  let body = '';
  req.setEncoding('utf8');

  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    if (body.trim() === '') {
      res.end();
      return;
    }

    readFile(body.trim(), (result) => {
      console.log(result);
    })
  });
});

app.listen(1337);

module.exports = app;