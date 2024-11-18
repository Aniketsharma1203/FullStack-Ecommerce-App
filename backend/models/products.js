import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    special_category: { type: String },
    description: { type: String, required: true },
    vendor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
    image: { type: String }, // File path for image
    display_image: { type: String }, // File path for display image
}, { timestamps: true });


export default mongoose.model('Products', productSchema);
