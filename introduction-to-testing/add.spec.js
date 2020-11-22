const assert = require('assert');
const add = require('./add');

const result = add(1, 3);
const expected = 4;

assert.strictEqual(result, expected, 'Add function does not work properly');
