const path = require("path");
const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  } catch (err) {
    res.status(500).statusMessage("Something went wrong.");
  }
});

router.get("/notes", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
  } catch (err) {
    res.status(500).statusMessage("Something went wrong.");
  }
});

router.get("*", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  } catch (err) {
    res.status(500).statusMessage("Something went wrong.");
  }
});

module.exports = router;
