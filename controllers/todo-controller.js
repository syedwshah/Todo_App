const Todo = require('../models/todo');

const todoController = {};

todoController.index = (req, res) => {
  Todo.findAll()
  .then(todo => {
    res.status(200).render('./todo-index' {
      todo,
    });
  }).catch(err => {
      console.log(err);
        res.status(500).json({
          message: "Not Found!",
          error: err,
        });
    });
}

todoController.show = (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => {
      res.status(200).render('./todo-single', {
        todo,
      });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
          message:"Not Found!",
          error: err,
        });
    });
}

todoController.create = (req, res) => {
  console.log(req.body);
  Todo.create({
    task: req.body.task,
    deadline: req.body.deadline,
    location: req.body.location,
    priority: req.body.priority,
    complete: req.body.complete,
  }).then(todo => {
    res.redirect('/todo', {
      pizza,
    });
    //redirect uses the directory the browser will follow, not the relative path.
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      message: 'Could not create successfully',
      error: err,
    });
  });
};

todoController.update = (req, res) => {
  Todo.update({
    task: req.body.task,
    deadline: req.body.deadline,
    location: req.body.location,
    priority: req.body.priority,
    complete: req.body.complete,
  }, req.params.id).then(todo => {
    res.redirect('back');
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      message: 'Update failed',
      error: err,
    });
  });
};

todoController.delete = (req, res) => {
  Todo.destroy(req.params.id)
    .then(() => {
      res.redirect('/todo');
    }).catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Delete failed',
        error: err,
      });
    });
};

module.exports = todoController;

