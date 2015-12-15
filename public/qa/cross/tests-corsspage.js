// test command: mocha -u tdd -R spec public/qa/cross/tests-corsspage.js 2>/dev/null

var Browser = require('zombie');
var assert = require('chai').assert;

var browser;

suite('Cross-Page Tests', function() {
    setup(function() {
        browser = new Browser();
    });

    test('requesting should populate the referrer field', function(done) {
        var referrer = 'http://localhost:3000/cross/page';
        browser.visit(referrer, function() {
            browser.clickLink('.request', function() {
                assert(browser.field('referrer').value === referrer);
                done();
            });
        });
    });
});
