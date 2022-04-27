const express = require("express");
const router = express.Router();
const UserService = require("../services/UserServices");
const auth = require("./auth");

// welcome page
router.get("/", (req,res)=>{
    res.send("<h1> Welcome to the bookstore app</h1>")
})
 

// router.get("/", auth.required, async (req,res)=>{
//     const userService = new UserService();
//     const result = await userService.getUser();
//     res.send(result);
// })

// sign up page
router.post("/signup", async (req,res)=>{
    const userService = new UserService();
    const result = await userService.setUser(req.body);
    res.send(result)
})

// sign in page
router.post("/login", async (req,res)=>{
    const userService = new UserService();
    const result = await userService.loginUser(req.body.email, req.body.password);
    res.send(result)
})

// home page
router.get("/home", (req,res) =>{
    res.send("Home page");
})


// account deleted by user
router.delete("/:id",auth.required, async (req,res)=>{
    const userService = new UserService();
    const result = await userService.removeUser(req.params.id);
    res.send(result)
})


module.exports = router;