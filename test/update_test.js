const assert = require('assert');
const User = require('../src/user');

describe('Updating a user', () => {
  let raj;

  beforeEach((done) => {
    raj = new User({name: 'Rajendra', postCount: 0});
    raj.save()
    .then(() => done());
  });

  function assertName(operation, done) {
    operation
    .then(() => User.find({}))
    .then((users) => {
      assert(users[0].name === 'Naga');
      done();
    });
  }

  it('Model instance update', (done) =>{
    assertName(raj.update({name: 'Naga'}), done);

  });

  it('Model instance  set n save', (done) =>{
    raj.set('name', 'Naga');
    assertName(raj.save(), done);
  });

  it('Model class update', (done) =>{
    assertName(User.update({name: 'Rajendra'}, {name: 'Naga'}), done);
  });

  it('Model class findOneAndUpdate', (done) =>{
    assertName(User.findOneAndUpdate({name: 'Rajendra'}, {name: 'Naga'}), done);
  });

  it('Model class findByIdAndUpdate', (done) =>{
    assertName(User.findByIdAndUpdate(raj._id, {name: 'Naga'}), done);
  });

  it('A user can have their postCount incremented by 1', (done) => {
    User.update({name: 'Rajendra'}, {$inc: { postCount: 10}})
      .then(() => User.findOne({name: 'Rajendra'}))
      .then((user) => {
        assert(user.postCount === 10);
        done();
      });
  });

});
