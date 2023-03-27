const express = require('express');
const cors = require('cors');

const test = require('./routes/test');

const port = 3005;
const app = express();

const ms = Math.floor(Math.random() * 2000) + 300;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(async (req, res, next) => {
  await new Promise((resolve) => setTimeout(resolve, ms));
  return next();
});
app.all('/', (req, res) => res.json({message: 'mock API'}));
app.use('/test', test);

app.listen(port, () => console.log(`Server running on port ${port}`));
