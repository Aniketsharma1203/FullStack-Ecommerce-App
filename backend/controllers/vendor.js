import { json } from "express";
import Products from "../models/products.js";
import multer from 'multer';
import path from 'path';


// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique file names
  }
});

// Multer upload middleware
const upload = multer({ storage }).fields([
  { name: 'image', maxCount: 1 },
  { name: 'display_image', maxCount: 1 },
]);

export const handleProductInfo = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error("Error during file upload:", err);
      return res.status(400).json({ error: "File upload failed" });
    }

    try {
      const { body, files } = req;

      // Log uploaded files and request body for debugging
      console.log("Uploaded Files:", files);
      console.log("Request Body:", body);

      // Prepare product data
      const productData = {
        name: body.name,
        category: body.category,
        price: body.price,
        quantity: body.quantity,
        special_category: body.special_category,
        description: body.description,
        vendor_id: body.vendor_id,
        image: files.image ? files.image[0].path : null, // Save file path
        display_image: files.display_image ? files.display_image[0].path : null, // Save file path
      };

      // Save product data to MongoDB
      const product = new Products(productData);
      await product.save();

      res.status(201).json({ message: "Product added successfully", product });
    } catch (error) {
      console.error("Error saving product:", error);
      res.status(500).json({ error: "Failed to save product" });
    }
  });
};

export const handleVendorProducts = async (req, res) => {
  const { vendor_id } = req.body;
  const products = await Products.find(vendor_id);
  if (!products) res.status(400).json("Not getting Any Products");
  else res.status(200).json(products);
};

export const handleDeleteProducts = async (req, res) => {
  await Products.findOneAndDelete({ _id: req.body.id });
  res.send("Deleted Successfully.")
};