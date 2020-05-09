//setting up router for '/api'
const express = require('express')
const router = express.Router();

//routes

router.get("/", (req, res) => {
    console.log("api/");
    res.end("Hello World");
});


//export routes

module.exports = router;