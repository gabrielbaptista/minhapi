const express = require('express')
const app = express()
 
var apiPort = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.get('/test', function (req, res) {
    res.send('Hello World Teste')
  })
  
app.listen(apiPort, () => console.log("Server is running"))