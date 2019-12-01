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

apiRouter.post('/messages', (req, res) => {
  messages.push(req.body);
  res.sendStatus(200);
});

app.use('/api', apiRouter);

app.listen(3000);

