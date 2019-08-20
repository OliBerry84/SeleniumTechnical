const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert');
const ScrollTest = require("../pages/scrollTest");

suite(function(env) {
    describe('All tests', function() {
        this.timeout(4000);
        let driver;
        let scrollTest;

        before(async function() {
            driver = await env.builder().build();
            scrollTest = new ScrollTest(driver);
            await scrollTest.open();
        });

        // it('has infinite scroll', function() {

        // });

        after(async function() {
            driver.quit();
        });
    });
});