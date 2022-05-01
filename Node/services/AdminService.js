const mongoose = require("mongoose");
const AdminSchema = require("../models/Admin");
const Admin = mongoose.model("Admin", AdminSchema); // in mongo 'users'
const BookService = require("./BookServices")

class AdminService {

    // called when signing up
    async setAdmin(admin) {

        if (admin["_id"] !== undefined) {
            return await Admin.updateOne({ "_id": admin["_id"] }, { $set: admin })
        }
        else {
            const adminObj = new Admin(admin);
            adminObj.setPassword(admin.password);
            const result = await adminObj.save();
            result["salt"] = "";
            result["hash"] = "";
            return result;
        }

    }




    async removeAdmin(_id) {
        return await Admin.updateOne({ "_id": _id }, { $set: { isDel: true } })
    }



    // called when signing in
    async loginAdmin(email, password) {
        const result = await Admin.find({ "email": email });
        if (result) {
            if (result.length > 0) {
                const admin = result[0];
                if (admin.validatePassword(password)) {
                    // SUCCESS
                    admin["hash"] = "";
                    admin["salt"] = "";
                    const objAdmin = admin.toObject();
                    objAdmin.token = admin.generateToken();
                    return objAdmin;
                }
                else {
                    // FAILURE
                    return;
                }
            }
        }
    }

    async removeBookAdmin(bookid) {
        const bookService = new BookService();
        const result = await bookService.removeBook(bookid);
        return (result);
    }
    async addBookAdmin(book) {
        const bookService = new BookService();
        const result = await bookService.setBook(book);
        return (result);
    }

}


module.exports = AdminService;