import express from "express";
import favicon from "express-favicon";
import { dirname } from "path";
import { fileURLToPath } from "url";
import register from "../controllers/register.js";
import entries from "../controllers/entries.js";
import login from "../controllers/login.js";
import posts from "../controllers/posts.js";
import connection from "../models/sql.js";
import validate from "../middleware/postValidation.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const router = express.Router();

router.use(favicon(__dirname + "/favicon.ico"));

router.get("/", entries.list);

router.get("/entries", entries.form, (req, res) => {
  posts.getPosts((err, posts) => {
    if (err) {
      console.log("! ! !");
      console.log("! ! !");
      console.log("! ! !");
      console.log("ошибка ");
      console.log("! ! !");
      console.log("! ! !");
      console.log(err.message);
    } else {
      res.render("main", {
        title: "Главная страница",
        posts: posts,
      });
    }
  });
});
router.post("/entries", entries.submit);

router.get("/register", register.form);
router.post("/register", register.submit);

router.get("/login", login.form);
router.post("/login", login.submit);

router.get("/logout", login.logout);

router.get("/new", posts.form);
router.post(
  "/new",
  posts.addPost,
  validate.validate("[title]"), // - skobki
  validate.validateSimbol("[body]") // - skobki
);

router.get("/posts/edit/:id", (req, res) => {
  const sql = "SELECT * FROM posts WHERE id = ?";
  connection.query(sql, [req.params.id], (err, results) => {
    if (err) {
      console.log("! ! !");
      console.log("! ! !");
      console.log("! ! !");
      console.log("ошибка ");
      console.log("! ! !");
      console.log("! ! !");
      console.log(err.message);
    } else {
      res.render("posts/edit", { post: results[0] });
      console.log("...");
    }
  });
});
router.post("/posts/edit/:id", (req, res) => {
  const sql = "UPDATE posts SET title = ?, body = ? WHERE id = ?";
  connection.query(
    sql,
    [req.body.title, req.body.body, req.params.id],
    (err, result) => {
      if (err) {
        console.log("! ! !");
        console.log("! ! !");
        console.log("! ! !");
        console.log("ошибка ");
        console.log("! ! !");
        console.log("! ! !");
        console.log(err.message);
      } else {
        res.redirect("/");
        console.log("...");
        console.log("операция проведена успешно");
      }
    }
  );
});
router.get("/posts/delete/:id", (req, res) => {
  const sql = "DELETE FROM posts WHERE id = ?";
  connection.query(sql, [req.params.id], (err, result) => {
    if (err) {
      console.log("! ! !");
      console.log("! ! !");
      console.log("! ! !");
      console.log("ошибка ");
      console.log("! ! !");
      console.log("! ! !");
      console.log(err.message);
    } else {
      res.redirect("/");
      console.log("...");
      console.log("операция проведена успешно");
    }
  });
});

export default router;
