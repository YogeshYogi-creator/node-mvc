const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../app/middlewares/authntication')
const TaskController = require('../app/coltrollers/tasksController');
const usersController = require('../app/coltrollers/usersController');

router.get('/', TaskController.welcome);
router.post('/api/users/register', usersController.register);
router.post('/api/users/login', usersController.login);
router.get('/api/users/account', authenticateUser, usersController.account);

router.get('/api/tasks', authenticateUser, TaskController.list);
router.post('/api/tasks', authenticateUser, TaskController.create);
router.get('/api/tasks/:id', authenticateUser, TaskController.show);
router.put('/api/tasks/:id', authenticateUser, TaskController.update);
router.delete('/api/tasks/:id', authenticateUser, TaskController.delete);

module.exports = router;