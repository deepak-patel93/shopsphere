import dotenv from 'dotenv'
app.use(express.urlencoded({ extended: true }));


import express from 'express';
import product from './routes/productRoutes.js';
import user from './routes/userRoutes.js';
import order from './routes/orderRoutes.js';
import payment from './routes/paymentRoutes.js';
import errorHandleMiddleware  from './middleware/error.js';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import cors from "cors";

// import fileUpload from "express-fileupload";


const app=express();
app.use(cors({
  origin: "https://shopsphere-frontend-sigma.vercel.app",
  credentials: true
}));

// Middleware
app.use(express.json())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
}));
// app.use(fileUpload())

// Route
app.use("/api/v1",product)
app.use("/api/v1",user)
app.use("/api/v1",order)
app.use("/api/v1",payment)



app.use(errorHandleMiddleware)
dotenv.config({path:'backend/config/config.env'})



app.get("/", (req, res) => {
  res.send("API is running...");
});
export default app;