let is = require('./scripts/is.js');

let string = require('./scripts/string.js');
let number = require('./scripts/number.js');
let array = require('./scripts/array.js');
let boolean = require('./scripts/boolean.js');

let arrayOf = require('./scripts/arrayOf.js');
let objectOf = require('./scripts/objectOf.js');

let object = require('./scripts/object.js');

module.exports = {
  array: array,
  arrayOf: arrayOf,
  objectOf: objectOf,
  is: is,
  object: object,
  string: string,
  number: number,
  boolean: boolean,
};
