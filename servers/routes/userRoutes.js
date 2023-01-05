const express = require('express');
const { signup, signin, allUser, deleteUser } = require('../conroller/userController');
const route = express.Router();

// user create
route.post('/signup', signup)
// sign in user
route.post('/signin', signin)
// get all user
route.get('/allUsers', allUser)
// delete user
route.delete('/deleteUser/:id', deleteUser)

module.exports = route