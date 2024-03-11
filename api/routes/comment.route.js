import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  createComment,
  deleteComment,
  editComment,
  getPostComments,
  getcomments,
  likeComment,
} from '../controllers/comment.controller.js';

const router = express.Router();

router.post('/create', createComment);
router.get('/getPostComments/:postId', getPostComments);
router.put('/likeComment/:commentId', likeComment);
router.put('/editComment/:commentId',  editComment);
router.delete('/deleteComment/:commentId',  deleteComment);
router.get('/getcomments',  getcomments);

export default router;
