import express from "express";
import mongoose from "mongoose";
import personRouter from './src/routes/personRoutes'
import cors from 'cors'

const app = express();



require("dotenv").config();
// middleware
app.use(cors())
app.use(express.json());
app.use("/api/v1/persons", personRouter)



// config
const PORT = process.env.PORT || 8000;
// database
mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database has Connected successfully");
  })
  .catch((err) => console.log("Error", err));
app.listen(PORT, (err) =>
  err
    ? console.error(err)
    : console.log(`Your server is running on port ${PORT}`)
);
