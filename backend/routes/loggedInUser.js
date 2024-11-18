import express from 'express';
import { getUserRole } from '../controllers/loggedInUser.js';

const router = express.Router();

router.post('/userRole', getUserRole);

export default router;