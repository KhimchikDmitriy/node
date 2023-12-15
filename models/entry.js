import sqlite3 from "sqlite3";
import bcrypt from "bcrypt";

const db = new sqlite3.Database("./test.sqlite");
const sql =
  "CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT(255) NOT NULL, title TEXT(255), content TEXT(255) NOT NULL)";
db.run(sql, (err) => {
  if (err) {
    console.log(err);
  }
});
class Entry {
  constructor() {}

  static create(data) {
    const sql = "INSERT INTO posts (username, title, content) VALUES (?, ?, ?)";
    db.run(sql, data.username, data.title, data.content);
  }
  static selectAll(cb) {
    db.all("SELECT * FROM user", cb);
  }
}

export default Entry;
