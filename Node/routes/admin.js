const express = require("express");
const router = express.Router();
const BookService = require("../services/BookServices");
const auth = require("./auth");
const AdminService = require("../services/AdminService");

// adding a book
router.post("/add", async (req, res) => {
    const adminService = new AdminService();
    const result = await adminService.addBookAdmin(req.body);
    res.send(result)
})
//adding admin
// router.post("/signup", async (req, res) => {
//     const adminService = new AdminService();
//     const result = await adminService.setAdmin(req.body);
//     res.send(result)
// })

// sign in page
router.post("/login", async (req, res) => {
    const adminService = new AdminService();
    const result = await adminService.loginAdmin(req.body.email, req.body.password);
    res.send(result)
})

// delete book
router.delete("/remove/:id", auth.required, async (req, res) => {
    const adminService = new AdminService();
    const result = await adminService.removeBookAdmin(req.params.id);
    res.send(result)
})



module.exports = router;