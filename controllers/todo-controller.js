const Todo = require('../models/todo');

const todoController = {};

todoController.index = (req, res) => {
  res.status(200).render('./')
}
