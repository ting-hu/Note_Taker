const fs = require("fs");
const path = require("paht");

module.exports = (app) => {
  fs.readFile("db/bd.json", "utf-8", (err, data) => {
    if (err) throw err;

    var notes = JSON.parse(data);

    app.get("/api/note", function (req, res) {
      res.json(notes);
    });

    app.post("/api/notes", function (req, res) {
      let newNote = req.body;
      notes.push(newNote);
      updateDb();
      return console.log("Added new note: " + newNote.title);
    });

    app.get("/api/notes/:id", function (req, res) {
      res.json(notes[req.params.id]);
    });

    app.get("/notes", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("*", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    function updateDb() {
      fs.writeFile("db/db.json", JSON.stringify(notes, "\t"), (err) => {
        if (err) throw err;
        return true;
      });
    }
  });
};
