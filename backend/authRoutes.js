const express = require("express");
const bcrypt = require("bcrypt");
const db = require("./database");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  db.run(
    "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
    [name, email, hashedPassword, role],
    function (err) {
      if (err) return res.status(400).json({ error: "User exists" });
      res.json({ message: "Registered successfully" });
    }
  );
});


router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing email or password" });
  }

  db.get("SELECT * FROM users WHERE email = ?", [email], async (err, user) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!user) return res.status(400).json({ error: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: "Wrong password" });


    res.json({
      id: user.id,
      name: user.name,
      role: user.role
    });
  });
});


db.all("SELECT * FROM users", [], (err, rows) => {
  console.log(rows);
});

module.exports = router;
