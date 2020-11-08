import User from './Model';

export default function userGetById(req, res) {
  console.log('-------');
  console.log(req.params.age);
  console.log('-------');

  const userId = req.params.userId;

  User.findById(userId)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User get all error');
    });
}
