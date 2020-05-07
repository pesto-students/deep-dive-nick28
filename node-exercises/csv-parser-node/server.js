const http = require('http');

const server = http.createServer((req, res) => {
  let body = '';
  req.setEncoding('utf8');

  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    // TODO: Add code for next steps with `body` fetched
  });
});

server.listen(1337);