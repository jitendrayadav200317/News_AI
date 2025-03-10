import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import cors from 'cors'

const app = express();
app.use(express.json());
dotenv.config();
dbConnect();
app.use(cors())




app.use('/auth', userRoutes);
app.listen(process.env.PORT, () => {
  console.log(`server is running ${process.env.PORT}`);
});
