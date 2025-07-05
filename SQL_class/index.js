const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(___dirname, "/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'test',
  database: 'delta_app',
    password: 'mysql@123',
});

//Inserting New Data
// let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
// let user = [
//   ["1234", "123_newuser2", "abc@gmail.comb", "abcd"],
//   ["123", "123_newuser", "abc@gmail.com", "abc"],
// // ];
// let data = [];
// for(let i = 1; i<= 100; i++ ){
//   data.push(getRandomUser()); //100 fake users
// }


let getRandomUser = () => {
  return {
    id:faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

// console.log(getRandomUser());
app.get("/",(req,res)=>{
  let q = `SELECT count(*) FROM user`;
  try{
    connection.query(q,(err, result)=>{
    // connection.query(q, [user], (err, result)=>{
        if(err) throw err;
        let count = result[0]["count(*)"];
        res.render("homee.ejs", { count });
    });
  }catch(err){
      console.log(err);
      res.send("some error in DB");
  }
});

//show Route
app.get("/user",(req,res) =>{
  let q = `SELECT * FROM user`;
  try{
    connection.query(q,(err, users)=>{
    // connection.query(q, [user], (err, result)=>{
        if(err) throw err;
        console.log(result);
        //res.send(result);
        res.render("showusers.ejs",{ users});
    });
  }catch(err){
      console.log(err);
      res.send("some error in DB");
  }
});

//Edit Route
app.get("/user/:id/edit",(req,res) =>{
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;

  try{
    connection.query(q,(err, result)=>{
    // connection.query(q, [user], (err, result)=>{
        if(err) throw err;
        console.log(result);
        //res.send(result);
        res.render("edit.ejs",{ user});
    });
  }catch(err){
      console.log(err);
      res.send("some error in DB");
  }

});

//update (DB) Route
app.patch("/user/:id",(req,res)=>{
  let {id} = req.params;
  let {password: formPass, username: newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;

  try{
    connection.query(q,(err, result)=>{
    // connection.query(q, [user], (err, result)=>{
        if(err) throw err;
        let user = result[0];
        if(formPass != user.password){
        res.send("WRONG password");
        }else{
          let q2 = `UPDATE user SET username =${newUsername} WHERE id = '${id}'`;
          connection.query(q2, (err, result)=>{
            if (err) throw err;
            res.redirect("/user");
          });
        }
      });
  }catch(err){
      console.log(err);
      res.send("some error in DB");
  }
});

app.listen("8080",() =>{
    console.log("Server is listening to port 8080");
});


