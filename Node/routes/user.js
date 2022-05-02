const express = require("express");
const router = express.Router();
const UserService = require("../services/UserServices");
const auth = require("./auth");
const jwt = require("express-jwt");

// welcome page
router.get("/", (req, res) => {
    res.send("<h1> Welcome to the bookstore app</h1>")
})


// sign up page
router.post("/signup", async (req, res) => {
    const userService = new UserService();
    const result = await userService.setUser(req.body);
    res.send(result)
})

// sign in page
router.post("/login", async (req, res) => {
    const userService = new UserService();
    const result = await userService.loginUser(req.body.email, req.body.password);
    res.send(result)
})


// account deleted by user
router.delete("/:id", auth.required, async (req, res) => {
    const userService = new UserService();
    const result = await userService.removeUser(req.params.id);
    res.send(result)
})

//add to wishlist
router.post("/:id/:bookid", async (req, res) => {
    const userService = new UserService();
    const result = await userService.addtowishlist(req.params.id, req.params.bookid);
    res.send(result)
})

//get wishlist
router.get("/wishlist/:id", auth.required, async (req, res) => {
    const userService = new UserService();
    const result = await userService.getwishlist(req.params.id);
    res.send(result["wishlist"]);
})

//delete book from wishlist
router.delete("/wishlist/:id/:wid", auth.required, async (req, res) => {
    const userService = new UserService();
    const result = await userService.deletetowishlist(req.params.id, req.params.wid);
    console.log("in user,js result after deleted :", result)
    res.send(result);
})


module.exports = router;