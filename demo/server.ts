import express from "express";
import fs from "fs";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/view", (req, res) => {
  res.sendFile(__dirname + "/html/view.html");
});

app.get("/edit", (req, res) => {
  res.sendFile(__dirname + "/html/edit.html");
});

app.get("/index.js", (req, res) => {
  res.sendFile(__dirname + "/js/client.js");
});

app.get("/Map.js", (req, res) => {
  const map = fs.readFileSync(__dirname + "/../dist/browser/Map.js");

  res.contentType("application/javascript").send(map.toString());
});

app.get("/index.css", (req, res) => {
  res.sendFile(__dirname + "/css/index.css");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});