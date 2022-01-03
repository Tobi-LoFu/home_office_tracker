const router = require('express').Router();
const {
   getUser,
   addUser,
   getUsers,
   updateUser,
   deleteUser,
} = require("../controllers/userController");


router.route('/')
    .get(getUsers)
    .post(addUser)

router.route('/:uid')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;