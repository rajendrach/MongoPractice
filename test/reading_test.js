const assert = require('assert');
const User = require('../src/user');

describe('Reading User Data', () => {
  let raj;

  beforeEach((done) => {
    raj = new User({name: 'Rajendra'});
    raj.save()
    .then(() => done());
  });
  it('finds all users with a name of Raj', (done) => {
    User.find({name: 'Rajendra'})
      .then((users) => {
        assert(users[0]._id.toString() === raj._id.toString());
        done();
      });
  });

  it('find a user with a particular id', (done) => {
    User.findOne({_id: raj._id})
      .then((userOne) => {
        assert(userOne.name === 'Rajendra');
        done();
      })
  });
});
