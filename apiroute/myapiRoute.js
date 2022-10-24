const express = require("express").Router
const path = require("path");
const db = require("../db/db.json");
const router = require("express").Router();

const fs = require("fs");
const uuid = require("uuid");

router.get("./notes", (req,res)=>{
    fs.readFile("../db.json").then((data)=>res.json(JSON.parse))
})