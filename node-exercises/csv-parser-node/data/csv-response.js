const http = require('http');

const server = http.createServer((req, res) => {
  res.write(`
  field_1,field_2,field_3¬
  aaa,bbb,ccc¬
  xxx,yyy,zzz¬
  `);
  res.end();
});

server.listen(1338);