const express = require("express");
//const fs = require("fs");
//const path = require("paht");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("__dirname"));

require("./routes/routes")(app);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
