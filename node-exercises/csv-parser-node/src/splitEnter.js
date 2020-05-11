// class spliEnter extends stream.Transform {
//   _transform(chunk, enc, next) {
//     this.push(chunk);
//     console.log(chunk);
//     next();
//   }
// }

// function splitEnter(options) {
//   Transform.call(this, options);
// }

// inherits(splitEnter, Transform);

// splitEnter.prototype._transform = function (chunk, encoding, callback) {
//   const split = chunk.toString().split(/\n/);
//   this.push(split);
//   callback();
// }

// function* spliEnter(data) {
//   for (const split of data.split(/\n/)) {
//     yield split;
//   }
// }

const Transform = require('stream').Transform;

class SplitEnter extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, enc, done) {
    const string = chunk.toString('utf8');
    const stringArray = string.split(/\n/);

    this.push('[');
    for (const data of stringArray) {
      this.push(data + ' ,');
    }
    this.push(']');
    done();
  }
}


export const splitEnter = new SplitEnter();