const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert');
const AuthTest = require("../pages/authTest");

suite(function(env) {
    describe('All tests', function() {
        this.timeout(4000);
        let driver;
        let authTest;

        before(async function() {
            driver = await env.builder().build();
            authTest = new AuthTest(driver);
            await authTest.open();
        });

        // it('has incorrect detail for password', async function() {
        //     authTest.addUsername("tomsmith");
        //     authTest.addPassword("incorrectpassword");
        //     authTest.submitClick();
        //     var status = driver.wait(until.elementLocated(authTest.locators.validCheck));
        //     let text = await status.getText();
        //     assert(text.includes("Your password is invalid"));
        // });

        // it('has incorrect detail for username', async function() {
        //     authTest.addUsername("incorrectusername");
        //     authTest.addPassword("SuperSecretPassword!");
        //     authTest.submitClick();
        //     var status = driver.wait(until.elementLocated(authTest.locators.validCheck));
        //     let text = await status.getText();
        //     assert(text.includes("Your username is invalid"));
        // });

        // it('has correct details', async function() {
        //     authTest.addUsername("tomsmith");
        //     authTest.addPassword("SuperSecretPassword!");
        //     authTest.submitClick();
        //     var status = driver.wait(until.elementLocated(authTest.locators.validCheck));
        //     let text = await status.getText();
        //     assert(text.includes("You logged into a secure area!"));
        // });

        after(async function() {
            driver.quit();
        });
    });
});