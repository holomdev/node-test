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

  it('rejects with errors if user with email was not found', () => {
    return findUserByEmail('x@y.com').then((result) => {
      assert.fail('Expected findUserByEmail function to reject.')
    }, (error) => {
      assert.strictEqual(error.message, 'User with email: x@y.com was not found.')
    })
  });
})

describe('The findUserById function', () => {
  it('find a user by ID (Using async/await)', async () => {
    const response = await findUserById(1);
    assert.strictEqual(response.message, 'User found successfully.');
  })

  it('should reject if user is not found by ID',  () => {
    return findUserById(0).then((result) => {
      assert.fail('Expected findUserById function to reject.');
    }, (error) => {
      assert.strictEqual(error.message, 'User with id: 0 was not found.');
    })
  });
})
