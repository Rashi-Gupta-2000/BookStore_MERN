const mongoose = require("mongoose");
const { Schema } = mongoose;


const BookSchema = new Schema({
    img: String,
    title: String,
    author: String,
    category: String,
    likes_count: {
        type: Number,
        default: 0
    },
    summary: String,
    content: String,

    isDel: {
        type: Boolean,
        default: false
    }
});



module.exports = BookSchema;