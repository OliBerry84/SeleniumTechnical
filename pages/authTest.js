const {Browser, By, Key, until} = require ("selenium-webdriver");

const url = 'http://the-internet.herokuapp.com/login'

class AuthTest {
    constructor(driver) {
        this.driver = driver;
        this.locators = {
            username: By.id("username"),
            password: By.id("password"),
            submitButton: By.css('#login > button'),
            validCheck: By.id('flash'),
        }
    }

    open() {
        this.driver.get(url);
    }

    // clickLink(){
    //     this.driver.findElement(By.linkText("Form Authentication")).click();
    // }

    addUsername(name){
        this.driver.findElement(this.locators.username).sendKeys(name);
    }

    addPassword(password){
        this.driver.findElement(this.locators.password).sendKeys(password);
    }

    async submitClick(){
        await this.driver.findElement(this.locators.submitButton).click();
    }

}

module.exports = AuthTest;