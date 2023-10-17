import express from "express";
const app = express();
const port = "3000";
app.listen(port, () => {
  console.log("listening port: " + port);
});
app.get("/", function (req, res) {
  res.send("<h1 style = 'color: green'>Hello kukuembers!</h1>");
  console.log();
});
