const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
  let raj;

  beforeEach((done) => {
    raj = new User({name: 'Rajendra'});
    raj.save()
    .then(() => done());
  });

  it('model instance remove', (done) => {
    raj.remove()
      .then(() => User.findOne({name: 'Rajendra'}))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it('class method remove', (done) => {
    //Remove a bunch of records with some given criteria
    User.remove({name: 'Rajendra'})
    .then(() => User.findOne({name: 'Rajendra'}))
    .then((user) => {
      assert(user === null);
      done();
    });
  });

  it('class method findAndRemove', (done) => {
    User.findOneAndRemove({name: 'Rajendra'})
    .then(() => User.findOne({name: 'Rajendra'}))
    .then((user) => {
      assert(user === null);
      done();
    });
  });

  it('class method findByIdAndRemove', (done) => {
    User.findByIdAndRemove({_id: raj._id})
    .then(() => User.findOne({name: 'Rajendra'}))
    .then((user) => {
      assert(user === null);
      done();
    });
  });
});
