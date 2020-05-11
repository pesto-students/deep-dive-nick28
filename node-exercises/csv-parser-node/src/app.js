const http = require('http');
import { splitComma } from './splitComma';
import { splitEnter } from './splitEnter';

// TODO: Test URL of CSV file
// const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
// const regex = new RegExp(expression);

const app = http.createServer((req, res) => {
  let body = '';
  req.setEncoding('utf8');

  req.on('data', (chunk) => {
    body += chunk;
    // Why chunk is complete? Try 64 KB, HighWaterMark check
  });

  req.on('end', () => {
    if (body.trim() === '') {
      res.end();
      return;
    }

    // Body suuports only URL as of now
    http.get(body.trim(), response => {
      response.pipe(splitEnter).pipe(splitComma).pipe(res);
    });

    // readFile(body.trim(), readFileCallback);
  });
});

app.listen(1337);

module.exports = app;