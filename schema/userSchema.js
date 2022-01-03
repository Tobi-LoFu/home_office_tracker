const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {type:String, required: true, minlength: 4},
    password: {type:String, required: true},
})

module.exports = mongoose.model('User', userSchema)
