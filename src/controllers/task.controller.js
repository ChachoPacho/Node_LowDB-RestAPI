const { v4 } = require('uuid');

const { getConnection } = require('../database')

const getTasks = async (req, res) => {
    const tasks = await getConnection().get('tasks').value();
    res.json(tasks);
}

const getTask = async (req, res) => {
    const task = await getConnection().get('tasks').find({ id: req.params.id }).value();
    res.json(task);
}

const createTask = async (req, res) => {
    const newTask = {
        id: v4(),
        title: req.body.title,
        description: req.body.description
    }
    await getConnection().get('tasks').push(newTask).write()
    res.json(newTask);
}

const updateTask = async (req, res) => {
    await getConnection().get('tasks').find({ id: req.params.id }).assign(req.body).write();
    res.status(200);
}

const deleteTask = async (req, res) => {
    await getConnection().get('tasks').remove({ id: req.params.id }).write();
    res.status(200);
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}