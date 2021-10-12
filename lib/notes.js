const fs = require("fs");
const path = require("path");

// allow notes data to be read/written from in flux
let notesData = require("../db/db");

// isolated function to over-write data
writeToFile = (data) => {
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(data, null, 2)
  );
  return;
};

createNote = (body) => {
  const newNote = body;

  // generate a random 10-char id
  let id = nanoid(10);
  newNote.id = id;

  // push the note to the data array and write the file
  notesData.push(newNote);
  writeToFile(notesData);
};

deleteNote = (deletedNoteId) => {
  // re-assign the data array to filter out the note to be deleted
  notesData = notesData.filter((note) => note.id !== deletedNoteId);
  writeToFile(notesData);
};

module.exports = { createNote, deleteNote };
