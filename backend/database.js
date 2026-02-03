const bcrypt = require("bcrypt");
const sqlite3 = require("sqlite3").verbose();
require("dotenv").config();

const db = new sqlite3.Database(process.env.DB_PATH, (err) => {
  if (err) console.log("DB Error:", err);
  else console.log("Connected to SQLite DB");
});

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT,
    role TEXT
  )
`);

async function ensureSuperAdmin() {
  db.run("DELETE FROM users WHERE role='superadmin'", (err) => {
    if (err) return console.error("Error deleting old superadmin:", err);

    console.log("Old superadmin removed if exixted ..");

    bcrypt.hash(process.env.SUPERADMIN_PASSWORD, 10, (err, hashedPassword) => {
      if (err) return console.error(err);

      db.run(
        "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
        ["Super Admin", process.env.SUPERADMIN_EMAIL, hashedPassword, "superadmin"],
        (err) => {
          if (err) console.error("Error creating superadmin:", err);
          else {
            console.log("Super Admin Created:");
            console.log("Email:", process.env.SUPERADMIN_EMAIL);
            console.log("Password:", process.env.SUPERADMIN_PASSWORD);
          }
        }
      );
    });
  });
}

ensureSuperAdmin();

module.exports = db;
