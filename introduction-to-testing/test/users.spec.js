const {findUserById, findUserByEmail} = require('../users');

describe('The findUserByEmail function', () => {
  it('should find user by email ', (done) => {
    findUserByEmail('bahdcoder@gmail.com').then((response) => {
      expect(response.message).toBe('User found successfully.')
      done();
    });
  });

  it('finds a user by email (using the return promise method)', () => {
    return findUserByEmail('bahdcoder@gmail.com').then((response) => {
      expect(response.message).toBe('User found successfully.')
    })
  });

  it('finds a user by email (Using async/await)', async () => {
    const response = await findUserByEmail('bahdcoder@gmail.com');
    expect(response.message).toBe('User found successfully.');
  });

  it('rejects with errors if user with email was not found', async () => {
    await expect(findUserByEmail('x@y.com')).rejects.toEqual(new Error('User with email: x@y.com was not found.'));

  });
})

describe('The findUserById function', () => {
  it('find a user by ID (Using async/await)', async () => {
    const response = await findUserById(1);
    expect(response.message).toBe('User found successfully.');
  })

  it('rejects with errors if user with id was not found', async () => {
    await expect(findUserById(0)).rejects.toEqual(new Error('User with id: 0 was not found.'));
  });
})
