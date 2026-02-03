
const express = require("express");
const cors = require("cors");
require("dotenv").config(); 

const authRoutes = require("./authRoutes");

const app = express();

app.use(express.json());


const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));


app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
