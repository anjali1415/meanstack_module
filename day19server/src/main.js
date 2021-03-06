const express = require("express");
const cors = require("cors");

const app = express();
// unblocking cors policy
app.use(cors());
// this will help to read the data coming in body :: TEXT to JSON
app.use(express.json());

const addbd = require("./addrecord");
app.get("/", async (req, res) => {
    res.json({ message: "hello world" })
})

app.get("/adduser", async (req, res) => {
    try {
        let input = req.query;
        await addbd.addUser(input);
        res.json({ message: "success" })
    } catch (err) {
        res.json({ message: "failure" });
    }
});

app.post("/adduser", async (req, res) => {
    try {
        const input = req.body;
        await addbd.addUser(input);
        res.json({ message: "success post" })
    } catch (err) {
        res.json({ message: "failure post" });
    }
})
app.listen(3100);