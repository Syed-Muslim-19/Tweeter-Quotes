const express = require("express");
const path = require("path");
const app = express();
console.log(path.join(__dirname, "../"));
const staticPath = path.join(__dirname);
app.use(express.static(staticPath));
app.get("/", (req, res) => {
  res.send("<h1>This is Home Menu Babe</h1>");
});
app.get("/main", (req, res) => {
  res.send("<h1>This is Main Menu Babe</h1>");
});
app.get("/about", (req, res) => {
  res.send({
    name: "Muslim",
    id: 1,
    loc: "UK",
  });
});
app.listen(8080, "127.0.0.1", () => {
  console.log("Server is Runing ...");
});
