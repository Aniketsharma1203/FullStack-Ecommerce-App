import express from 'express';
import { handleProductInfo } from '../controllers/vendor.js';
import { handleVendorProducts } from '../controllers/vendor.js';


const router = express.Router();

router.post('/productinfo',handleProductInfo);
router.post('/vendorproducts',handleVendorProducts);

export default router;