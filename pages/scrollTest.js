const {Browser, By, Key, until} = require ("selenium-webdriver");

const url = 'http://the-internet.herokuapp.com/infinite_scroll'

class ScrollTest {
    constructor(driver) {
        this.driver = driver;
        this.locators = {
            html: By.css('.jscroll-inner'),
            loader: By.css('')
        }
    }

    open() {
        this.driver.get(url);
    }

}

module.exports = ScrollTest;