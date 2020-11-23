const { parse, stringify } = require('../parse-stringify');

describe('The stringify function', () => {
  it('should stringify an object into valid query string', function () {
    const actual = stringify({ by: 'kati-frantz'});
    const expected = 'by=kati-frantz';
    expect(actual).toBe(expected);
  });
})

describe('The parse function', () => {
  it('should parse a query string into an object', function () {
    const actual = parse('?by=kati-frantz');
    const expected = { by: 'kati-frantz' };
    expect(actual).toEqual(expected);
  });
})