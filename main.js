import express from "express";
import cors from "cors";

//import data from "./db/data.json" assert { type: "json" };

const server = express();
const port = 4000;

server.use(express.json()); //JSON parser

server.use((req, res) => {
    res.status(404).send("Diese Seite gibt es nicht :(");
});

server.use((err, req, res, next) => {
    console.log("Ein Fehler ist aufgetreten", err);
    res.status(500).send("Es liegt nicht an dir sondern an mir...");
});

server.listen(port, () => {
    console.log("Server is running on " + port);
});
