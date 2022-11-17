const { Builder, By, Key } = require("selenium-webdriver");

const chai = require('chai');
const should = chai.should();


// Hàm kiểm tra trường UserName
async function fieldUserPhone(testcase, expect) {
  // Khởi tạo một cửa sổ chrome mới
  let driver = await new Builder().forBrowser('chrome').build();
  // Tìm kiếm một trang web có chức năng bình luận trong trang RapChieuPhim
  await driver.get('https://rapchieuphim.com/phim/black-panther-wakanda-bat-diet#box-comments');
  // Tìm kiếm thành phần tin nhắn
  await driver.findElement(By.name('message')).click();
  // Tìm kiếm thành phần username. Điển tên đăng nhập là "test123" vào trường username
  await driver.findElement(By.name('username')).sendKeys('test123');
  // Tìm kiếm thành phần userphone
  let userphone = await driver.findElement(By.name('userphone'));
  // Điển testcase vào trường userphone
  await userphone.sendKeys(testcase);
  // Nhấn nút gửi
  await driver.findElement(By.xpath('//button[@class="btn btn-success green"]')).submit();
  // Lấy thông báo từ trường userphone
  let message = await userphone.getAttribute("validationMessage");
  // So sánh kết quả với kỳ vọng
  message.should.equal(expect);
  // Thoát trình duyệt
  await driver.quit();
}

describe('Kiểm tra trường số điện thoại', async function () {
  it('T6 Số điện thoại - Không được nhập chữ cái', async () => fieldUserPhone("asdfghjk", "Không được nhập chữ cái"));
  it('T7 Số điện thoại - Không được nhập ký tự đặc biệt', async () => fieldUserPhone("@0909090909", "Không được nhập ký tự đặc biệt"));
});
