var express = require('express');
var router = express.Router();

var userController = require('../controllers/user');

router.route('/v1/users')
  .post(userController.postUsers)
  .get(userController.getUsers)
  

router.route('/v1/users/update/:id')
	.put(userController.updateUsers)
	.delete(userController.deleteUsers) 
  .get(userController.findUser)

router.route('/v1/users/search')
    .get(userController.searchUsers)

module.exports = router;