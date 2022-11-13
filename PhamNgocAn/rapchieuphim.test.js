const { Builder, By, Key } = require("selenium-webdriver");

const chai = require('chai');
const should = chai.should();

async function testSearchKey(keyword) {
  describe('Kiểm tra search', async function () {
    it('Có khoảng trắng ở đầu', async function () {
      let driver = await new Builder().forBrowser('chrome').build();
      await driver.get('https://rapchieuphim.com');
      await driver.findElement(By.className('search_control')).sendKeys(keyword, Key.RETURN);
      let text = await driver.findElement(By.className('primary-color')).getText().then(function (value) {
        return value;
      });
      text.should.equal("Kết quả tìm kiếm cho a");
      await driver.quit();
    });
  });
}

testSearchKey("   a");
