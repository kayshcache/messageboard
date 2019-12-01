const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


const messages = [{text: 'some text', owner: 'Fred'}, {text: 'other', owner: 'Eightball'}];

app.use(bodyParser.json())
app.use(cors({origin: 'http://localhost:4200'}));

const api = express.Router();

api.get('/messages', (req, res) => {
  res.json(messages);
});

api.post('/message', (req, res) => {
  messages.push(req.body);
  res.sendStatus(200);
});

app.use('/api', api);

app.listen(3000);

