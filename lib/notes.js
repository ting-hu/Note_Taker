const fs = require("fs");
const path = require("path");
const { nanoid } = require("nanoid");
let notesData = require("../db/db.json");

createNote = (body) => {
  const newNote = body;
  let id = nanoid(10);
  newNote.id = id;
  notesData.push(newNote);
  return fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesData, null, 2)
  );
};

deleteNote = (noteId) => {
  notesData = notesData.filter((note) => note.id !== noteId);
  return fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesData, null, 2)
  );
};

module.exports = { createNote, deleteNote };
