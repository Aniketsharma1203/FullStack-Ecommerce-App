import express from 'express';
import { handleProductInfo } from '../controllers/vendor.js';
import { handleVendorProducts } from '../controllers/vendor.js';
import { handleDeleteProducts } from '../controllers/vendor.js';


const router = express.Router();

router.post('/productinfo',handleProductInfo);
router.post('/vendorproducts',handleVendorProducts);
router.post('/deleteProduct', handleDeleteProducts);

export default router;