/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var noop = require('./index');

/**
 * Test
 */

describe('noop', function() {
  it('should do absolutely nothing', function() {
    noop.should.be.of.type('function');
    (undefined === noop()).should.be.ok;
  });
});
