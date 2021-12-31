const express = require('express')
const app = express()

const port = process.env.PORT || 2020

app.use(express.static(`${__dirname}`))

app.listen(port, console.log(`app up on port ${port}`))
