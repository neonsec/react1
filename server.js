var express = require('express');

//Create our app
var app = express();

app.use(express.static("public"));

app.listen(3000,()=>{
  console.log("Express  Server is running in port 3000")
})
