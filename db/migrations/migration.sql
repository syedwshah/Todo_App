

DROP TABLE IF EXISTS todo_sql;
CREATE TABLE IF NOT EXISTS todo_sql (
  id SERIAL PRIMARY KEY,
  task TEXT,
  deadline VARCHAR(255),
  location VARCHAR(255),
  difficulty INTEGER
);
