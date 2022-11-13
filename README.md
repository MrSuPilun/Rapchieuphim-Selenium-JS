*** Setup example

```
npm install
```

*** Run testing
Thay folder PhamNgocAn bằng tên folder của mình

```
npm mocha --no-timeouts --parallel --reporter mochawesome --require mochawesome/register /PhamNgocAn/*.js
```

hoặc sử dụng lên ngắn gọn của cú pháp trên (lệnh dầy đủ được lưu trong file package.js)

```
npm test /PhamNgocAn/*.js
```

*** Run all testing

```
npm test /*/*.js
```
