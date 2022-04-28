const mongoose = require("mongoose");
// const { obj } = require("../models/User");
const UserSchema = require("../models/User");
const User = mongoose.model("User", UserSchema); // in mongo 'users'
const BookService = require("./BookServices")

class UserService {

    // called when signing up
    async setUser(user){

        if(user["_id"] !== undefined) {
          return await User.updateOne({ "_id":user["_id"] }, { $set: user })
        }
        else{
            const userObj = new User(user);
            userObj.setPassword(user.password);
            const result = await userObj.save();
            result["salt"] = "";
            result["hash"] = "";
            return result;
        }

    }

    
    // async getUser(){
    //     return await User.find({isDel: false}).select(["-salt", "-hash"])
    // }

    
    async removeUser(_id){
        return await User.updateOne({"_id":_id}, {$set:{ isDel: true }})
    }

    async addtowishlist(_id,_bookid){
        const bookService = new BookService();
        const result = await bookService.getBookById(_bookid);
        console.log(result);
        return await User.findOneAndUpdate({"_id":_id}, {$push:{ "wishlist" : result.title }})
    }


    // called when signing in
    async loginUser(email, password){
        const result = await User.find({"email":email});
        if(result){
            if(result.length > 0){
                const user = result[0];
                if(user.validatePassword(password)){
                    // SUCCESS
                    user["hash"] = "";
                    user["salt"] = "";
                    const objUser = user.toObject();
                    objUser.token =  user.generateToken();
                    return objUser;
                }
                else{
                    // FAILURE
                    return;
                }
            }
        }
    }

    // db.getCollection('users').update({},{$pull:{"wishlist": "title"}})
    async deletetowishlist(_id,_wid){
        const bookService = new BookService();
        const userobj = await User.findOne({ $and: [{ isDel: false }, { "_id": _id }] })  
        console.log(userobj.wishlist[_wid]);
        // console.log(wishlist[_wid])
        // return awsi
        return await User.updateOne({},{$pull:{"wishlist": userobj.wishlist[_wid]}})
    }
    
    async getwishlist(_id){
        return await User.findOne({ $and: [{ isDel: false }, { "_id": _id }] })  
    }

}


module.exports = UserService;