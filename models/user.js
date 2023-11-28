import sqlite3 from "sqlite3";
const db = new sqlite3.Database("../test.sqlite");

// Classe User
class User {
  constructor() {}

  static create(dataForm) {}

  static findByEmail(email) {}
}
