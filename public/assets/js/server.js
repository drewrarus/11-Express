var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var notes = {
    routeName: "note1",
    name: "note1",
};


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});


app.get("/api/notes", function (req, res) {
    return res.json(notes);
});

app.get("/api/notes/:note", function (req, res) {
    var pickednote = req.params.note;

    console.log(pickednote);

    for (var i = 0; i < notes.length; i++) {
        if (chosen === notes[i].routeName) {
            return res.json(notes[i]);
        }
    }

    return res.json(false);
});

app.post("/api/notes", function (req, res) {

    var newNote = req.body;

    newNote.routeName = newNote[i]

    console.log(newNote);

    notes.push(newNote);

    res.json(newNote);
    
});

app.listen(PORT, function () {
    console.log("Application is listening on  the PORT ");
});
