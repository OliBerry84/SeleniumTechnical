// const {Browser, By, Key, until} = require("selenium-webdriver");
// const {suite} = require("selenium-webdriver/testing");
// const assert = require('assert');
// const TestingPage = require("../pages/advancedTest");

// suite(function(env) {
//     describe('All tests', function() {
//         this.timeout(4000);
//         let driver;
//         let page;

//         before(async function() {
//             driver = await env.builder().build();
//             page = new TestingPage(driver);
//             await page.open();
//         });

//         it('Selects summer dresses', async function() {
//             await page.hoverAndClick();
//             let summerDress = await driver.findElement(page.locators.womensSubMenu);
//             var url = await summerDress.getCurrentUrl();
//             assert(url.includes("http://automationpractice.com/index.php?id_category=11&controller=category"));
//         });

//         it('Moves slider to 20', async function() {
//             await page.slidePrice();
//             let slider = sliderBar.getAttribute("style");
//             assert(slider.contains("left: 75"));
//         })

//         after(async function() {
//             driver.quit();
//         });
//     });
// });