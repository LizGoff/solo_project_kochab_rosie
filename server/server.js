const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const conversation = require('./routes/convo.router');
const resource = require('./routes/resource.router');
const subtopic = require('./routes/subtopics.router');
var gallery = require('./routes/gallery.router.js');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize()); 
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/conversation', conversation); 
app.use('/api/resource', resource); 
app.use('/api/subtopics', subtopic); 
app.use('/gallery', gallery);

app.use(express.static('build'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});