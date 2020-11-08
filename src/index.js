// const lodash = require('lodash');
// const {get} = require('lodash');
// const a = {
//     name: 'Olya'
// };
// const b = get(a, 'name', 'guest')
// console.log('Hello', b);

// const express = require('express');
import express from 'express';
import errorHandler from './modules/core/errorHandler';
import logger from './modules/core/logger';
import parseResponse from './modules/core/parseResponse';
import cors from './modules/core/cors';
import routes from './modules/core/routes';
import dbConnect from './modules/core/db';

const app = express();
const PORT = 5000;

dbConnect();
logger(app);
parseResponse(app);
cors(app);
routes(app);

// app.get('/', home); // localhost: 5000/
// app.post('/info', info); // localhost: 5000/info

errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
