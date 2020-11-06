// const lodash = require('lodash');
// const {get} = require('lodash');
// const a = {
//     name: 'Olya'
// };
// const b = get(a, 'name', 'guest')
// console.log('Hello', b);

// const express = require('express');
import express from 'express';
import home from './home';
import info from './info';
import errorHandler from './errorHandler';
import logger from './logger';
import parseResponse from './parseResponse';
import cors from './cors';

const app = express();
const PORT = 5000;

logger(app);
parseResponse(app);
cors(app);
app.get('/', home); // localhost: 5000/
app.post('/info', info); // localhost: 5000/info
errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});