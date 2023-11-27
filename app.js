import { create } from "domain";
import express from "express";
import favicon from "express-favicon";
import { join } from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import Sequelize from "sequelize";
import sqlite3 from "sqlite3";
// const db = new sqlite3.Database(":memory:");
// import { sequelize } from './db';
import fs from "fs";
import ejs from "ejs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = "3000";
const currentTime = new Date().toLocaleString();
import myRoutes from "./routers/index_routers.js";

app.set("view engine", "ejs");
app.set("\views", __dirname + "views");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "test.sqlite",
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "public")));
app.use(
  "/bootstrap.css",
  express.static(
    join(__dirname, "public/css/bootstrap-5.3.2/dist/css/bootstrap.css")
  )
);
app.use(
  "/bootstrap.js",
  express.static(
    join(__dirname, "public/css/bootstrap-5.3.2/dist/js/bootstrap.js")
  )
);
app.use(favicon(join(__dirname, "/public/img/ico.png")));
app.use(myRoutes);

app.listen(port, () => {
  console.log("...");
  console.log("проверка console.log пройдена");
  console.log("...");
  console.log("начинается логгирование");
  console.log("...");
  addline("server started");
  console.log("логгирование завершено");
  console.log("...");
  console.log("в данный момент используется версия " + app.get("env"));
});

// app.get("/as", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
//   addline("logging completes /as");
// });
// app.get("/", (req, res) => {
//   res.end("dea ex machina");
//   addline("logging completes /");
// });
// app.get("/test", (req, res) => {
//   res.end("deus ex machina");
//   addline("logging completes /test");
// });
// app.post("/as", (req, res) => {
//   console.log("...");
//   console.log("проверка post пройдена");
//   console.log("...");
//   console.log(req.body);
//   console.log("password: " + req.body.pass);
//   console.log("name: " + req.body.name);
//   res.end("проверка post пройдена.");
// });
// app.post("/test", (req, res) => {
//   console.log("...");
//   console.log("проверка post пройдена");
//   console.log("...");
//   console.log(req.body);
//   console.log(req.url);
//   console.log("password: " + req.body.pass);
//   console.log("name: " + req.body.name);
//   res.end("проверка post пройдена.");
// });
function addline(line) {
  line = line + " timestamp: " + currentTime + "\n";
  fs.appendFile(__dirname + "/logger/logger.txt", line, (err) => {
    if (err) return console.log(err);
  });
}
// error handler
app.use((req, res, next) => {
  const err = new Error("какая-то непонятная ошибка ошибка");
  err.status = 404;
  next(err);
});
//production error handler
app.get("env") == "production";
console.log("переход на " + app.get("env"));

if (app.get("env") != "development") {
  app.use((err, req, res, next) => {
    // err.status = 400;
    res.render("error.ejs", { error: err.message, status: err.status });
  });
} else {
  app.use((err, req, res, next) => {
    res.status = 404;
    console.log("! ! !");
    console.log("! ! !");
    console.log("! ! !");
    console.log("ошибка " + res.status);
    console.log("! ! !");
    console.log(app.get);
    console.log("! ! !");
    console.log(err.message);
    res.end("GOVNOKOD!");
  });
}
