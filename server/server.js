const express = require("express");
const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "test@gmail.com" && password === "123456") {
    return res.json({ name: "Kalyani" });
  } else {
    return res.status(400).json({ message: "Invalid credentials" });
  }
});

app.listen(5000, () => console.log("Server running"));
