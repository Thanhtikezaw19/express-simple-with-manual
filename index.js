const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("Hello Express")
})

app.post("/", (req, res) => {
  res.send("POST Respond")
})

app.listen(port, () => {
  console.log("Successfully Started on port" ,{port})
})