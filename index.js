const express = require("express");
const app = express();
app.get("/", (req, res) =>{
    res.json({message: {
        ip: "play.ispemc.com",
        port: 19132
    }});
    console.log(`${req.ip} already open current page`)
});
app.listen(3000, () => {
    console.log("Listening http://127.0.0.1:3000");
});