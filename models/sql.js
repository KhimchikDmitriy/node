import mysql from "mysql";

const connection = mysql.createConnection({
  host: "sql8.freemysqlhosting.net",
  port: "3306",
  user: "sql8676175",
  password: "p1LIuGB8z6",
  database: "sql8676175",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("...");
  console.log("соединение установлено");

  let sql =
    "CREATE TABLE IF NOT EXISTS posts( id INT PRIMARY KEY AUTO_INCREMENT, title VARCHAR(255) NOT NULL, body TEXT,author VARCHAR(255) DEFAULT 'guest')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });

  sql =
    "CREATE TABLE IF NOT EXISTS user (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(50), age INT NOT NULL, role VARCHAR(50) DEFAULT 'user')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
});

export default connection;
