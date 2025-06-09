const express = require('express');

const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

let port = 8080;

//1 listening

app.listen = (port, ()=>{
  console.log("App is listening on port")
});

//ctrl + c to stop the process running in server
//2 parsing

app.use((req, res) =>{
  console.log("Request received");
  let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Orange</li></ul>"
  res.send(code);
})

app.get("/",(req,res)=>{
  res.send("hello! I'm root.");
});