const { Router } = require('express');
const router = Router();

const { getTasks, getTask, createTask, updateTask, deleteTask } = require('../controllers/task.controller');

//GET
router.get('/tasks', getTasks);

router.get('/tasks/:id', getTask);


//POST
router.post('/tasks', createTask);


//PUT
router.put('/tasks/:id', updateTask);


//DELETE
router.delete('/tasks/:id', deleteTask);

module.exports = router;