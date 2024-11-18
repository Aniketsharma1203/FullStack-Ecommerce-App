import express from 'express';

import { handleUserSignup } from '../controllers/user.js';
import { handleUserLogin } from '../controllers/user.js';

const router = express.Router();

router.post('/usersignup', handleUserSignup);
router.post('/userslogin', handleUserLogin);

export default router;