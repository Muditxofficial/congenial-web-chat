const express = require('express')
const app = express()
const config = require('./config/app')
const router = require('./router')
app.use(express.json())
app.use(express.urlencoded({ extended : true}))
app.use(router)

const port = config.appPort

app.listen(port,() => {
    console.log(`Server running on localhost:${port}/home`)
})