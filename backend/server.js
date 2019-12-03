const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


const messages = [{text: 'some text', owner: 'Fred'}, {text: 'other', owner: 'Eightball'}];

app.use(bodyParser.json())
app.use(cors({origin: 'http://localhost:4200'}));

const apiRouter = express.Router();

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

app.use('/api', apiRouter);

app.listen(3000);

