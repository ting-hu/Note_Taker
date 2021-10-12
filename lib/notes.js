const fs = require("fs");
const path = require("path");
const { nanoid } = require("nanoid");
let notesData = require("../db/db");

writeToFile = (data) => {
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(data, null, 2)
  );
  return;
};

createNote = (body) => {
  const newNote = body;
  let id = nanoid(10);
  newNote.id = id;
  notesData.push(newNote);
  writeToFile(notesData);
};

deleteNote = (deletedNoteId) => {
  notesData = notesData.filter((note) => note.id !== deletedNoteId);
  writeToFile(notesData);
};

module.exports = { createNote, deleteNote };
