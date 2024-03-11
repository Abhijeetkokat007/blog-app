import express from 'express';
import {
  deleteUser,
  getUser,
  getUsers,
  signout,
  test,
  updateUser,
} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test);
router.put('/update/:userId',  updateUser);
router.delete('/delete/:userId',  deleteUser);
router.post('/signout', signout);
router.get('/getusers',  getUsers);
router.get('/:userId', getUser);

export default router;
