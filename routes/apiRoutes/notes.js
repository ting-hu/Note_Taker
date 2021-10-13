const router = require("express").Router();
const path = require("path");
const notesData = require("../../db/db.json");
const notesFunctions = require("../../lib/notes");

// Get notes
router.get("/notes", (req, res) => {
  return res.sendFile(path.join(__dirname, "../../db/db.json"));
});

// Create a note
router.post("/notes", (req, res) => {
  return res.json(createNote(req.body));
});

// Delete a note
router.delete("/notes/:id", (req, res) => {
  return res.json(deleteNote(req.params.id));
});

module.exports = router;
