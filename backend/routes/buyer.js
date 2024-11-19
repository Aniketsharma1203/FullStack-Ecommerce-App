import express from 'express';
import { getTshirts } from '../controllers/buyer.js';
import { getWomenClothes } from '../controllers/buyer.js';
import { getMenClothes } from '../controllers/buyer.js';

const router = express.Router();

router.get('/t-shirts',getTshirts);
router.get('/women',getWomenClothes);
router.get('/men',getMenClothes);

export default router;