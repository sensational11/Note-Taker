const path = require("path");
const db = require("../db/db.json");
const router = require("express").Router();

const fs = require("fs");
const uuid = require("uuid");

router.get("/notes", (req, res) => {
  let results = JSON.parse(fs.readFileSync("./db/db.json"));
  res.send(results)
});

router.post("/notes", (req,res) => {
    let notes = JSON.parse(fs.readFileSync("./db/db.json"));
    notes.push({
        title: req.body.title,
        text: req.body.text,
        id: `${notes.length}`,
    });
    fs.writeFileSync("./db/db.json", JSON.stringify(notes))
    res.json(notes);
});

module.exports= router;
