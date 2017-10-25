const db = require('../db/config');

const Todo = {};

Todo.findAll = () =>
  db.query('SELECT * FROM todo_sql');

Todo.findById = id => {
  return db.oneOrNone ('SELECT * FROM todo_sql WHERE id = $1', [id]);
  //need to add a return here since implicit would return undefined
}
Todo.create = todo => {
  return db.one(`
    INSERT INTO todo_sql
    (task, deadline, location, difficulty)
    VALUES ($1, $2, $3, $4)
    RETURNING *`,
    [todo.task, todo.deadline, todo.location, todo.difficulty]);
}

Todo.update = (todo, id) => {
  return todo.one(`
    UPDATE todo_sql SET
    task = $1,
    deadline = $2,
    location = $3,
    difficulty = $4
    RETURNING *`,
    [todo.task, todo.deadline, todo.location, todo.difficulty]);
}

Todo.destroy = (id) => {
  return db.none(`
    DELETE FROM todo_sql
    WHERE id = $1`, [id]);
}

module.exports = Todo;
