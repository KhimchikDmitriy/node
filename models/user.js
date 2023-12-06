import sqlite3 from "sqlite3";
import bcrypt from "bcrypt";

const db = new sqlite3.Database("../test.sqlite");
const sql =
  "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT(255) NOT NULL, email TEXT(255) NOT NULL, password TEXT(20) NOT NULL, age INTEGER NOT NULL)";

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
        "INSERT INTO users (name, email, password, age) VALUES (?, ?, ?, ?)";

      db.run(sql1, dataForm.name, dataForm.email, hash, dataForm.age, cb);
    } catch (err) {
      if (err) {
        return next(err);
      }
    }
  }

  static findByEmail(email, cb) {
    db.get("SELECT * FROM users WHERE email = ?", email, cb);
  }

  static authentificate(dataForm, cb) {
    User.findByEmail(dataForm.email, (err, user) => {
      if (err) return cb(err);
      if (!user) return cb();
    });

    const user = 0; // delete me please (@_@)'

    const result = bcrypt.compare(dataForm.password, user.password);
    if (result) return cb(user);
  }
}

export default {};
