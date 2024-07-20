import express from "express";
import { readFile } from "fs";
const app = express();

app.get("/files/:fileName", function(req, res) {
    const name = req.params.fileName;
    console.log(name);
    readFile(name, "utf-8", function(err, data) {
        res.json({
            data
        });
    })
})

app.listen(3000);