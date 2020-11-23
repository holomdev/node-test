const assert = require('assert');
const {findUserById, findUserByEmail} = require('../users');

describe('The findUserByEmail function', () => {
  it('should find user by email ', (done) => {
    findUserByEmail('bahdcoder@gmail.com').then((response) => {
      assert.strictEqual(response.message, 'User found successfully.');
      done();
    });
  });

  it('finds a user by email (using the return promise method)', () => {
    return findUserByEmail('bahdcoder@gmail.com').then((response) => {
      assert.strictEqual(response.message, 'User found successfully.');
    })
  });

  it('finds a user by email (Using async/await)', async () => {
    const response = await findUserByEmail('bahdcoder@gmail.com');
    assert.strictEqual(response.message, 'User found successfully.');
  });
})
