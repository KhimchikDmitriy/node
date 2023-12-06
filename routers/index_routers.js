import { create } from "domain";
import express from "express";
import favicon from "express-favicon";
import { join } from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import ejs from "ejs";
import register from "../controllers/register.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const router = express.Router();
// const login = require("../controllers/login.js");

router.use(favicon(__dirname + "/favicon.ico"));

router.get("/", (req, res) => {
  res.end("gost'");
  console.log("...");
  console.log("заход на /");
});

router.get("/entries", entries.list);
router.post("/entry", entry);

router.get("/login", login.form);
router.post("/login", login.submit);

router.get("/register", register.form);
router.post("/register", register.submit);

router.get("/as", (req, res) => {
  res.sendFile(__dirname + "/vremenno/index.html");
  console.log("...");
  console.log("заход на /as");
});
router.post("/as", (req, res) => {
  console.log("...");
  console.log("проверка post пройдена");
  console.log("...");
  console.log(req.body);
  console.log("password: " + req.body.pass);
  console.log("name: " + req.body.name);
  res.end("проверка post пройдена.");
});

router.get("/test", (req, res) => {
  res.end("deus ex machina");
  console.log("...");
  console.log("заход на /test");
});
router.post("/test", (req, res) => {
  console.log("...");
  console.log("проверка post пройдена");
  console.log("...");
  console.log(req.body);
  console.log(req.url);
  console.log("password: " + req.body.pass);
  console.log("name: " + req.body.name);
  res.end("проверка post пройдена.");
});

export default router;
// ☺☻♥♦♣♠±
