const express = require('express')
const app = express()
const config = require('./config/app')
require
app.get("/home",(req,res) => {
    res.send("HOMEPAGE")
});

const port = config.appPort

app.listen(port,() => {
    console.log(`Server running on localhost:${port}/home`)
})