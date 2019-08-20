const {Browser, By, Key, until} = require ("selenium-webdriver");

const url = 'http://the-internet.herokuapp.com/key_presses'

class KeyPressTest {
    constructor(driver) {
        this.driver = driver;
        this.locators = {
            keys: By.id("target"),
            result: By.id("result")
        }
    }

    open() {
        this.driver.get(url);
    }

    keyPress(key){
        this.driver.findElement(this.locators.keys).sendKeys(key);
    }

}

module.exports = KeyPressTest;