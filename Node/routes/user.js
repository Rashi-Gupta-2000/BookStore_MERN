const express = require("express");
const router = express.Router();
const UserService = require("../services/UserServices");
const auth = require("./auth");
const jwt = require("express-jwt");

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

// const getTokenFromHeaders = req => {
// 	const {
// 		headers: { authorization }
// 	} = req;

// 	if (authorization && authorization.split(" ")[0] === "Token") {
//         authorization.split(" ")[1] = "123";
//         console.log(authorization.split(" ")[1])
//         console.log("IN the fun")
//         console.log(authorization)
//         console.log("hi")
//         return authorization.split(" ")[1];
// 	}
// 	return null;
// };


// router.post('/logout', auth.required, async(req, res) => {
//     try{
//         // let randomNumberToAppend = toString(Math.floor((Math.random() * 1000) + 1));
//         // let randomIndex = Math.floor((Math.random() * 10) + 1);
//         // let hashedRandomNumberToAppend = await bcrypt.hash(randomNumberToAppend, 10);
//         // now just concat the hashed random number to the end of the token
//         const ans = getTokenFromHeaders(req)
//         console.log(ans)
//         //console.log(req)
//         // req.token = req.token + "123";
//         // console.log(req.token)
//         return res.status(200).json('logout');
//     }catch(err){
//         return res.status(500).json(err.message);
//     }
// });


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

router.post("/:id/:bookid",auth.required, async (req,res)=>{
    const userService = new UserService();
    const result = await userService.addtowishlist(req.params.id,req.params.bookid);
    res.send(result)
})


module.exports = router;