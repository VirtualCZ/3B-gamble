const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const mysql = require("mysql")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "gamblego"
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))



app.get("/api/getCase", (req, res) => {
    const sqlSelect =
        "SELECT * FROM cases";
    db.query(sqlSelect, (err, result)=> {
        //console.log(err)
        res.send(result)
    });
})

app.listen(3030, ()=> {
    console.log("running on port 3030");
})  