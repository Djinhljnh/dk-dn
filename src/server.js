const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/register", (req, res) => {
  res.send("This is the registration page");
});

app.get("/login", (req, res) => {
  res.send("This is the login page");
});

app.post("/login", (req, res) => {
  const { name, password } = req.body;
  res.send("Đăng nhập thành công");
});

app.post("/register", (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  res.send("Đăng ký thành công");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
