const router = require("express").Router();
const path = require("path");
const notesData = require("../../db/db.json");
const notesFunctions = require("../../lib/notes");

// get notes from data file and render them to the page
router.get("/notes", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../../db/db.json"));
    res.status(200);
  } catch (err) {
    res.status(404).statusMessage("Notes data not found.");
  }
});

// create a note
router.post("/notes", (req, res) => {
  try {
    res.json(createNote(req.body));
    res.status(201);
  } catch (err) {
    res.status(500).statusMessage("Something went wrong.");
  }
});
// delete a note
router.delete("/notes/:id", (req, res) => {
  try {
    res.json(deleteNote(req.params.id));
    res.status(200);
  } catch (err) {
    res.status(500).statusMessage("Something went wrong.");
  }
});

module.exports = router;
