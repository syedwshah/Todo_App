const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//start the app
const app = express();
//method override
app.use(methodOverride('_method'));

//config
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//static config (to handle static files)
app.use(express.static('public'));

//views config (to handle views)
app.set('views', path.join(__dirname,'views'));
app.set('view enginer','ejs');

//config port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Running on PORT ${port}`);
});

app.get('/', (req,res) => {
  res.render('index')
});

//route requires
const todoRoutes = require('./routes/todo-routes.js');
app.use('/todo', todoRoutes);

//Exception for unexpected browser link
app.get('*', (req, res) => {
  res.status(404).send('404 Not Found');
});
