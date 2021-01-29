const express = require('express')
const app = express()
const config = require('./config/app')
const router = require('./router')
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({ extended : true}))
app.use(cors())
app.use(router)


const port = config.appPort

app.listen(port,() => {
    console.log(`Server running on localhost:${port}/home`)
})