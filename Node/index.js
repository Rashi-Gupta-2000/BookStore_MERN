const express = require("express");
const app = express();
const mongoose = require("mongoose");
const DB = 'mongodb+srv://latika:123@cluster0.shk9r.mongodb.net/bookstore?retryWrites=true&w=majority'
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
app.use("/admin", require("./routes/admin"));

app.get("/", (req, res) => {
    res.send("Welcome to the Bookstore Project")
})

app.listen(4507, (e) => {
    console.log("Bookstore app listening on port 4500......")

    mongoose.connect(DB).then((result) => {
        console.log("Database Connected")
    }).catch((e) => {
        console.log("Database connection failed")
        console.log(e)
    })

})