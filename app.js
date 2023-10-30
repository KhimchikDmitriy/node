import { create } from "domain";
import express from "express";
import favicon from "express-favicon";
import { join } from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import fse from "fs-extra/esm";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = "3000";
const currentTime = new Date().toLocaleString();

const content =
  currentTime + ", логгируем ping по адресу " + "localhost:" + port + "/";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "public")));
app.use(favicon(join(__dirname, "/public/ico.png")));
app.listen(port, () => {
  console.log("...");
  console.log("проверка console.log пройдена");
  console.log("...");
  console.log("начинается логгирование");
  console.log("...");
  fs.access("xxx.txt", fs.constants.F_OK, (err) => {
    if (err) {
      fs.writeFile("xxx.txt", content, () => {
        console.log("логгирование завершено.");
      });
    } else {
      fs.appendFile("xxx.txt", `\n${content}`, () => {
        console.log("логгирование завершено.");
      });
    }
  });
});
app.get("/as", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/test", (req, res) => {
  res.end("deus ex machina");
});
app.post("/as", (req, res) => {
  console.log("...");
  console.log("проверка post пройдена");
  console.log("...");
  console.log(req.body);
  console.log("password: " + req.body.pass);
  console.log("name: " + req.body.name);
  res.end("проверка post пройдена.");
});
app.post("/", (req, res) => {
  console.log("...");
  console.log("проверка post пройдена");
  console.log("...");
  console.log(req.body);
  console.log(req.url);
  console.log("password: " + req.body.pass);
  console.log("name: " + req.body.name);
  res.end("проверка post пройдена.");
});
