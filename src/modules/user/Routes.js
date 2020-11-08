import { Router } from 'express';
import userRegister from './userRegister';
import userGetAll from './userGetAll';
import userGetById from './userGetById';
const router = Router();

router.post('/', userRegister); // POST localhost:5000/user
router.get('/', userGetAll); // GET localhost:5000/user
router.get('/:userId/:age', userGetById); // GET localhost:5000/user

export default router;
