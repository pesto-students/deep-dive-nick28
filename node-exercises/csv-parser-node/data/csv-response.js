const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const fileName = __dirname + '/csv-response.txt';
  const stream = fs.createReadStream(fileName);

  stream.on('open', () => {
    stream.pipe(res);
  });

  stream.on('close', () => {
    res.end();
  });

});

server.listen(1338);