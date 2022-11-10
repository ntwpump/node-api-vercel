const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:'ontology_lichen',
    host:'cs85.hostneverdie.com',
    password:'rh3J0o4i5',
    database:'ontology_lichen',
    port:'3306'
})

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/lichen',(req,res)=>{
  db.query("SELECT li_id FROM lichen",(err,result)=>{
      if(err){
          console.log(err);
      }
      else{
          res.send(result);
      }
  })
})

/*app.get('/employees',(req,res)=>{
    db.query("SELECT * FROM employees",(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})
app.post("/create", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;
  
    db.query(
      "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
      [name, age, country, position, wage],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });
  
  app.put("/update", (req, res) => {
    const id = req.body.id;
    const wage = req.body.wage;
    db.query(
      "UPDATE employees SET wage = ? WHERE id = ?",
      [wage, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });
  
  app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });*/
  

app.listen('3001 ',()=>{
    console.log("Server is running on port 3001");
})

