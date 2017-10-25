const express = require('express');

const todoRoutes = express.Router();
const todoController = require('../controllers/todo-controller');

todoRoutes.get('/', todoController.index);
// todoRoutes.post('/', todoController.create);

// todoRoutes.get('/add', (req,res)=>{
//   res.render('./todo-add');
// })

// todoRoutes.get('/:id', todoController.show);
// todoRoutes.put('/', todoController.update);
// todoRoutes.delete('/:id', todoController.delete);

module.exports = todoRoutes;
