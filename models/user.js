import sqlite3 from "sqlite3";
import bcrypt from "bcrypt";

const db = new sqlite3.Database("../test.sqlite");
const sql =
  "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT(255) NOT NULL, password TEXT(20) NOT NULL, age INTEGER NOT NULL, name TEXT(255) NOT NULL)";

db.run(sql, (err) => {
  if (err) {
    console.log(err);
  }
});

// for 1
class User {
  constructor() {}

  static async create(dataForm, cb) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(dataForm.password, salt);
      const sql1 =
        "INSERT INTO users (email, password, age, name) VALUES (?, ?, ?, ?)";

      db.run(sql1, dataForm.email, hash, dataForm.age, dataForm.name, cb);
    } catch (err) {
      if (err) {
        return next(err);
      }
    }
  }

  static findByEmail(email, cb) {
    db.get("SELECT * FROM users WHERE email = ?", email, cb);
  }

  static autentificate(dataForm, cb) {
    User.findByEmail(dataForm.email, (err, user) => {
      if (err) return cb(err);
      if (!user) return cb();
    });

    const result = bcrypt.compare(dataForm.password, user.password);
    if (result) return user;
  }
}
