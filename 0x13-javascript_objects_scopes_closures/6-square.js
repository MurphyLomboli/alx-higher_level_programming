#!/usr/bin/node

/**
 * A class Square that defines a square and inherits from Square of 5-square.js:
 * You must use the class notation for defining your class and extends
 */

class Square extends require('./5-square') {
  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }
    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
}
module.exports = Square;
