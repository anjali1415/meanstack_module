const express = require("express");
const app = express();
// http:/ / localhost: 3000 / :: URL:: API:: REST API
app.get("/", (req, res) => {
    const username = req.query.username;
    const id = req.query.id;
    const json = { id: 1, title: "anjali" };
    res.json(json);
});
//app.listen(3000);

console.log("creating server with by express");