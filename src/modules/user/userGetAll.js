import User from './Model';

export default function userGetAll(req, res) {
  User.find() // .find({ email: 'qwe@wef.com' })// фильтрация
    // .limit(1) // пагинация
    // .skip(1)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User get all error');
    });
}