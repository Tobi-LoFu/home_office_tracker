const User = require('../schema/userSchema')


async function getUsers(req, res, next) {
    console.log('GET all Users');
    const allUsers = await User.find()
    res.send({message:'All users ', payload: allUsers})
}

async function addUser(req, res, next) {
   console.log("ADD one more user");
   console.log(req.body);
   const newUser = await User.create(req.body)
   res.send({message: 'User added', payload: newUser}) 
}

function getUser(req, res, next) {
   console.log("GET One User");
   res.send("One user: ...");
}

function updateUser(req, res, next) {
   console.log("UPDATE ONE User");
   res.send("user updated: ...");
}

function deleteUser(req, res, next) {
   console.log("DELETE User");
   res.send("user deleted: ...");
}

module.exports = {getUser, addUser, getUsers, updateUser, deleteUser}