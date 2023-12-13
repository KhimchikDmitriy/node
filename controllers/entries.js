import sqlite3 from "sqlite3";
import bcrypt from "bcrypt";

const db = new sqlite3.Database("./test.sqlite");
const sql =
  "CREATE TABLE IF NOT EXISTS post (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT(255) NOT NULL, title TEXT(255), content TEXT(255) NOT NULL)";
