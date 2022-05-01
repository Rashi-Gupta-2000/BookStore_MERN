const mongoose = require("mongoose");
const { Schema } = mongoose;
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const AdminSchema = new Schema({
    admin_name: String,
    email: String,
    type: String,  // user and admin
    isDel: {
        type: Boolean,
        default: false
    },
    salt: String,
    hash: String
});

AdminSchema.methods.generateToken = function () {
    return jwt.sign({
        _id: this._id,
        user_name: this.user_name,
        email: this.email
    }, "ABCD")
}


AdminSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 1000, "sha512").toString("hex");
}

AdminSchema.methods.validatePassword = function (password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 1000, "sha512").toString("hex");
    return this.hash === hash;
}


module.exports = AdminSchema;