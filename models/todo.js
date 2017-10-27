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
    (task, deadline, location, priority, complete)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *`,
    [todo.task, todo.deadline, todo.location, todo.priority, todo.complete]);
}

//.update() requires a table and an id, so basically todo_sql and some id
Todo.update = (todo, id) => {
  return db.one(`
    UPDATE todo_sql SET
    task = $1,
    deadline = $2,
    location = $3,
    priority = $4,
    complete = $5
    WHERE id = $6
    RETURNING *`,
    [todo.task, todo.deadline, todo.location, todo.priority, todo.complete, id]);
}

Todo.destroy = (id) => {
  return db.none(`
    DELETE FROM todo_sql
    WHERE id = $1`, [id]);
}

module.exports = Todo;
