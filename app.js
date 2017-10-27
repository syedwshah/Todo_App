const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

//start the app
const app = express();
//method override
app.use(methodOverride('_method'));

require('dotenv').config();

//config
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//User Auth setup:
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

//static config (to handle static files)
app.use(express.static('public'));

//views config (to handle views)
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

//config port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Running on PORT ${port}`);
});

app.get('/', (req,res) => {
  res.render('index')
});

//route requires

//todo routes:
const todoRoutes = require('./routes/todo-routes.js');
app.use('/todo', todoRoutes);

//User Authentication/Authorization routes:
// const authRoutes = require('./routes/auth-routes');
// app.use('/auth', authRoutes);
// const userRoutes = require('./routes/user-routes');
// app.use('/user', userRoutes);

//Exception for unexpected browser link
app.get('*', (req, res) => {
  res.status(404).send('404 Not Found');
});
