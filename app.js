import express from "express";
import favicon from "express-favicon";
import { join } from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = "3000";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "public")));
app.use(favicon(join(__dirname, "/public/ico.png")));
app.listen(port, () => {
  console.log("проверка console.log пройдена");
});
app.get("/as", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/test", (req, res) => {
  res.end("deus ex machina");
});
app.post("/as", (req, res) => {
  console.log("проверка post пройдена");
  console.log(req.body);
  console.log("password: " + req.body.pass);
  console.log("name: " + req.body.name);
  res.end("проверка post пройдена");
});
