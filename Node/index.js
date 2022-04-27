const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cors = require("cors");
const helmet = require("helmet");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(cors());

// http://localhost:3500/user/

app.use("/user", require("./routes/user"));
app.use("/book", require("./routes/book"));


app.get("/", (req, res) => {
    res.send("Welcome to the Bookstore Project")
})

app.listen(4500, (e) => {
    console.log("Bookstore app listening on port 4500......")

    mongoose.connect("mongodb://localhost/bookstore").then((result) => {
        console.log("Database Connected")
    }).catch((e) => {
        console.log("Database connection failed")
        console.log(e)
    })

})