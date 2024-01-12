import connection from "../models/sql.js";

const form = (req, res) => {
  res.render("posts/new", {
    title: "Создать пост",
    errorMessage: res.locals.errorMessage,
  });
  console.log("...");
  console.log("заход на /new");
};

const sql =
  "CREATE TABLE IF NOT EXISTS posts( id INT PRIMARY KEY AUTO_INCREMENT, title VARCHAR(255) NOT NULL, body TEXT,author VARCHAR(255) DEFAULT 'guest')";

connection.query(sql, (err) => {
  if (err) {
    console.log(err);
  }
});

const addPost = (req, res) => {
  const { title, body } = req.body;
  const author = req.session.name;

  let query = "INSERT INTO posts (title, body, author) VALUES (?, ?, ?)";
  connection.query(
    query,
    [title, body, author],
    function (err, results, fields) {
      if (err) {
        console.log(err.message);
        res.redirect("/new");
        console.log("! ! !");
        console.log("! ! !");
        console.log("! ! !");
        console.log("ошибка ");
        console.log("! ! !");
        console.log("! ! !");
        res.end("Omnissia not dovolen!");
      } else {
        res.redirect("/");
        console.log("...");
        console.log("успешное создание поста");
      }
    }
  );
};

function getPosts(callback) {
  let query = "SELECT * FROM posts ORDER BY id DESC";
  connection.query(query, function (err, results, fields) {
    if (err) {
      console.log("! ! !");
      console.log("! ! !");
      console.log("! ! !");
      console.log("ошибка ");
      console.log("! ! !");
      console.log("! ! !");
      console.log(err.message);
      callback(err, null);
    } else {
      callback(null, results);
      console.log("...");
      console.log("операция прошла успешно");
    }
  });
}

export default { form, addPost, getPosts };
