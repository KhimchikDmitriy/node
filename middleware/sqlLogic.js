import connection from "../models/sql.js";
import mysql from "mysql";

const edit = (req, res) => {
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
      logger.error(err);
    } else {
      res.render("posts/edit", { post: results[0] });
      console.log("...");
    }
  });
};
const update = (req, res) => {
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
        logger.error(err);
      } else {
        res.redirect("/");
        console.log("...");
        console.log("операция проведена успешно");
      }
    }
  );
};
const deleted = (req, res) => {
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
      logger.error(err);
    } else {
      res.redirect("/");
      console.log("...");
      console.log("операция проведена успешно");
    }
  });
};

export default { edit, update, deleted };
