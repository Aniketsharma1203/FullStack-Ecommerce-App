import express, { urlencoded } from 'express';
import cors from 'cors';
import { connectToMongoDb } from './connect.js';
import userRoute from "./routes/user.js";
import LoggedInRoutes from './routes/loggedInUser.js';
import VendorRoutes from './routes/vendor.js';
import BuyerRoutes from './routes/buyer.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

connectToMongoDb("mongodb://127.0.0.1:27017/e-commerce")
    .then(() => console.log("MongoDB Connected."))
    .catch(error => console.log(error));

app.use('/', userRoute)
app.use('/loggedin', LoggedInRoutes)
app.use('/vendor', VendorRoutes)
app.use('/buyer', BuyerRoutes)
app.use('/uploads', express.static('uploads'));


app.listen(PORT, () => console.log(`App is listening on ${PORT}`));