const express = require("express");
require("./first.js");
require("./second.js");
require("./routes.js");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
