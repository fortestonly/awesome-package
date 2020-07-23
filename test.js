
const assert = require('assert');
const awesome = require('./');

describe('Package', function () {
  it('should return awesome message', function () {
    assert.equal(awesome(), 'Awesome Package!');
  });
});
