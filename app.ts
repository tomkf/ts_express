import express = require('express')


const app: express.Application = express();

app.get('/', (req, res) => {
    res.send("hello from express")
})


app.listen(3000, () => {
    console.log("express listneing on port 3000")
})