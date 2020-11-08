import homeRouter from '../home/Routes';
import infoRouter from '../info/Routes';
import userRouter from '../user/Routes';
export default function routes(app) {
  app.use('/', homeRouter);
  app.use('/info', infoRouter);
  app.use('/user', userRouter);
}
