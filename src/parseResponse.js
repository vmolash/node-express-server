import bodyParser from 'body-parser';

export default function parseResponse(app) {
  app.use(bodyParser.urlencoded({ exteded: false }));
  app.use(bodyParser.json());
}
