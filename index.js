const express = require('express')
const app = express()
const port = process.env.PORT || 2020
app.listen(port, console.log(`app up on port ${port}`))
app.use(express.static(`${__dirname}`))