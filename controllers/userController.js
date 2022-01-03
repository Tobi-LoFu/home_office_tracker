function getUsers(req, res, next) {
    console.log('GET all Users');
    res.send('All users: ...')
}

function addUser(req, res, next) {
   console.log("ADD one more user");
   res.send('User added') 
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