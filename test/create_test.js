const assert = require('assert');
const User = require('../src/user');

describe('Creating Records', () => {
  it('saves a user', (done) =>{
    const raj = new User({ name: 'Rajendra' });
    raj.save()
      .then(() => {
        assert(!raj.isNew);
        done();
      });
  });
});
