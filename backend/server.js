const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


const messages = [{text: 'some text', owner: 'Fred'}, {text: 'other', owner: 'Eightball'}];
const users = [];

app.use(bodyParser.json())
app.use(cors({origin: 'http://localhost:4200'}));

const apiRouter = express.Router();
const authRouter = express.Router();

apiRouter.get('/messages', (req, res) => {
  res.json(messages);
});

apiRouter.get('/messages/:user', (req, res) => {
  const user = req.params.user;
  const result = messages.filter(message => message.owner == user);

  res.json(result);
});

apiRouter.post('/messages', (req, res) => {
  messages.push(req.body);
  res.json(req.body);
});

authRouter.post('/register', (req, res) => {
// Create an ID from the index of user in the user DB/array
  const index = users.push(req.body) - 1;
  const user = users[index];
  user.id = index;

// Create the JWT and send back user name with token in response object
  const name = req.body.givenName;
  const token = jwt.sign(user.id, 'unsafe_secret');
// Note: how the variable/value pair becomes the key/value pair
  res.json({name, token});
});

app.use('/api', apiRouter);
app.use('/auth', authRouter);

app.listen(3000);

