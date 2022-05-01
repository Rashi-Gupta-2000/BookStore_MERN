const express = require("express");
const router = express.Router();
const BookService = require("../services/BookServices");
const auth = require("./auth");


router.get("/", auth.required, async (req, res) => {
    const bookService = new BookService();
    const result = await bookService.getBook();
    res.send(result);
})

router.get("/likes/:id", auth.required, async (req, res) => {
    const bookService = new BookService();
    const result = await bookService.incrementLikes(req.params.id);
    res.send(result);
})

// adding a book
router.post("/add", async (req, res) => {
    const bookService = new BookService();
    const result = await bookService.setBook(req.body);
    res.send(result)
})


// delete book
router.delete("/remove/:id", auth.required, async (req, res) => {
    const bookService = new BookService();
    const result = await bookService.removeBook(req.params.id);
    res.send(result)
})

//content of the book
router.get("/:id/content", auth.required, async (req, res) => {
    const bookService = new BookService();
    const result = await bookService.getBookById(req.params.id);
    res.send(result)
})

module.exports = router;