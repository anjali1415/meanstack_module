// url to vs code and vs code to database

const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const express = require("express");
const app = express();
const addrecord = require("./addrecord2")
const config = require("./config");

app.get("/adduser", async (req, res) => {
    try {
        const input = req.query;
        await addrecord.funaddrecord(input);

        const json = { message: "success" };
        res.json(json);
    } catch (err) {
        const json = { message: "failure" }
        res.json(json);
    }
});
app.listen(3000);

