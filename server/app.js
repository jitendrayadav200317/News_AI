import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
dotenv.config();
dbConnect();


// console.log(process.env.PORT);

app.use('/auth', userRoutes);
app.listen(process.env.PORT, () => {
  console.log(`server is running ${process.env.PORT}`);
});
