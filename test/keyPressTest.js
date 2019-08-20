const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert');
const KeyPressTest = require("../pages/keyPressTest");

suite(function(env) {
    describe('All tests', function() {
        this.timeout(4000);
        let driver;
        let keyPressTest;

        before(async function() {
            driver = await env.builder().build();
            keyPressTest = new KeyPressTest(driver);
            await keyPressTest.open();
        });

        it('checks key press', async function() {
            keyPressTest.keyPress("A");
            var status = driver.wait(until.elementLocated(keyPressTest.locators.result));
            var text = await status.getText();
            assert(text.includes("You entered: A"));
            await driver.manage().setTimeouts({implicit: 2000});
            keyPressTest.keyPress("S");
            var status = driver.wait(until.elementLocated(keyPressTest.locators.result));
            var text = await status.getText();
            assert(text.includes("You entered: S"));
            await driver.manage().setTimeouts({implicit: 2000});
            keyPressTest.keyPress("D");
            var status = driver.wait(until.elementLocated(keyPressTest.locators.result));
            var text = await status.getText();
            assert(text.includes("You entered: D"));
            await driver.manage().setTimeouts({implicit: 2000});
            keyPressTest.keyPress("F");
            var status = driver.wait(until.elementLocated(keyPressTest.locators.result));
            var text = await status.getText();
            assert(text.includes("You entered: F"));
        });

        after(async function() {
            driver.quit();
        });
    });
});