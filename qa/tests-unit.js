// command: mocha -u tdd -R spec public/qa/unit/tests-unit.js

var example = require('../lib/example.js');
var expect = require('chai').expect;

suite('unit test', function() {
    test('getData() should return data', function() {
        expect(typeof example.getData() === 'string');
    });
});
