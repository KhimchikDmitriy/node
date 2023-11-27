import { create } from "domain";
import express from "express";
import favicon from "express-favicon";
import { join } from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
// import Sequelize from "sequelize";
import fs from "fs";
import ejs from "ejs";
// const __dirname = dirname(fileURLToPath(import.meta.url));
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  // addline("logging completes /");
});

// router.post("/", (req, res) => {});

// router.get("/register", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
//   addline("logging completes /as");
// });
// router.post("/register", (req, res) => {});

router.get("/as", (req, res) => {
  res.sendFile(__dirname + "/p/index.html");
  // addline("logging completes /as");
});
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
export default router;
