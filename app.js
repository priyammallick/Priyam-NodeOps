const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Node.js CI/CD Pipeline Deployed Successfully!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
module.exports = app;