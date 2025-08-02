const express = require("express");
const connectDB = require("./config/dbconnect");
const dotenv = require("dotenv");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("QuickDesk API is running ✅");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


