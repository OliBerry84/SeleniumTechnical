// const {Browser, By, Key, until} = require ("selenium-webdriver");

// const url = 'http://automationpractice.com/index.php'

// class TestingPage {
//     constructor(driver) {
//         this.driver = driver;
//         this.locators = {
//             womensMenu: By.xpath(`//*[@id="block_top_menu"]/ul/li[1]/a`),
//             womensSubMenu: By.xpath(`//*[@id="block_top_menu"]/ul/li[1]/ul/li[2]/ul/li[3]/a`),
//             sliderBar: By.xpath(`//*[@id="layered_price_slider"]/a[2]`),
//             womensSubClass: By.xpath(`//*[@id="categories_block_left"]/div/ul/li[2]/a`),
//             summerDress: By.xpath(`//*[@id="categories_block_left"]/div/ul/li[3]/a`),
//         }
//     }

//     open() {
//         this.driver.get(url);
//     }
//     // #2
//     async hoverAndClick() {
//         let womensMenu = await this.driver.findElement(this.locators.womensMenu);
//         let womensSubMenu = await this.driver.findElement(this.locators.womensSubMenu);
//         await this.driver.actions({bridge: true}).moveToElement(womensMenu);
//         await this.driver.actions({bridge: true}).moveToElement(womensSubMenu);
//         this.driver.actions.click().build().perform();
//     }
//     // #3
//     async slidePrice() {
//         let womensMenu = await this.driver.findElement(this.locators.womensMenu);
//         let womensSubClass = await this.driver.findElement(this.locators.womensSubClass);
//         let summerDress = await this.driver.findElement(this.locators.summerDress);
//         let slider = await this.driver.findElement(this.locators.sliderBar);
//         womensMenu.click();
//         womensSubClass.click();
//         summerDress.click();
//         this.driver.actions.clickAndHold(slider).moveByOffset(75,0).release().build();        

//     }

// }

// module.exports = TestingPage;