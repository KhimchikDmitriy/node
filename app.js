const path = require("path");
const fs = require("fs");
// fs.mkdir(path.join(__dirname, "tmp"), function (err) {
//   if (err) throw err;
//   console.log("папка создана");
// });
const filePath = path.join(__dirname, "tmp", "2.txt");
console.log(filePath);
// fs.writeFile(filePath, "Something wrong your file path", function (err) {
//   if (err) throw err;
//   console.log("файл создан");
// });
// fs.appendFile(filePath, "~ara ", function (err) {
//   if (err) throw err;
//   console.log("файл изменен");
// });
fs.readFile(filePath, "UTF-8", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});
