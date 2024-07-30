import express from 'express'
import dotenv from "dotenv";
import mongoose from 'mongoose';
import userRouter from './routes/users.routes.js';
import postRouter from './routes/posts.routes.js';
import authRouter from './routes/auth.routes.js';



dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);


app.use("*", (req, res) =>
    res.status(404).json({ error: "Route does not exist" })
);

const port = process.env.PORT || 4000
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    //Only listen to port when database is connected.
    console.log(`Connected to MongoDB`);
    app.listen(port, () => {
      console.log(`App is listening to port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });