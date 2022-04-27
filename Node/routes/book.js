const express = require("express");
const router = express.Router();
const BookService = require("../services/BookServices");
const auth = require("./auth");

// // welcome page
// router.get("/", (req,res)=>{
//     res.send("<h1> Welcome to the bookstore app</h1>")
// })
 

router.get("/", auth.required, async (req,res)=>{
    const bookService = new BookService();
    const result = await bookService.getBook();
    res.send(result);
})

// adding a book
router.post("/add", async (req,res)=>{
    const bookService = new BookService();
    const result = await bookService.setBook(req.body);
    res.send(result)
})


// delete book
router.delete("/remove/:id",auth.required, async (req,res)=>{
    const bookService = new BookService();
    const result = await bookService.removeBook(req.params.id);
    res.send(result)
})


module.exports = router;