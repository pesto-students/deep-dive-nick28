const Transform = require('stream').Transform;

class SplitComma extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, done) {

    //encoding type of chunk
    // Decoder || toString

    const string = chunk.toString('utf8');
    const stringArray = string.split(',');

    if (!(string.trim() === '' || string.trim() === '[' || string.trim() === ']')) {
      this.push('[');
      for (const data of stringArray) {
        // if (data.trim() === '' || data.trim() === '[' || data.trim() === ']') {
        //   continue;
        // }


        // JSON stringify it
        this.push('"');
        this.push(data);
        this.push('",');
      }
      this.push('],');
    } else {
      this.push(string.trim());
    }

    done();
  }
}

export const splitComma = new SplitComma();