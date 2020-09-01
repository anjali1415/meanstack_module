const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const express = require("express");
const app = express();//create instance of express.
const dbadd = require("./addrecods");
const dbread = require("./readrecord");

// take data from url ind insert into DB
app.get('/adduser', async (req, res) => {
    try {
        const input = req.query;
        await dbadd.addrecord(input);
        const json = { message: "success" }
        res.json(json);
    } catch (err) {
        const json = { message: "failure" }
        res.json(json);
    }
});

// read data from DB and give to server in jason form
app.get('/alluser', async (req, res) => {
    try {
        let record = await dbread.readrecords();
        res.json(record);
        const json = { message: "success" }
        res.json(json);
    } catch (err) {
        const json = { message: "failure" }
        res.json(json);
    }

});
app.listen(3001);