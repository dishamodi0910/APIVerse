import express from "express";
import cors from "cors";

import connectDB from "./mongodb/index.js";


import authRouter from "./routers/auth.router.js";
import userRouter from "./routers/user.router.js";
import plantRouter from "./routers/plant.router.js"
import taskRouter from "./routers/task.router.js"
import messageRouter from "./routers/message.router.js"
import healthLogRouter from "./routers/healthLog.router.js"


const app = express();
app.use(cors({
    origin: function (origin, callback) {
      const allowedOrigins = ['http://localhost:5173','https://aarkid-client.vercel.app'];
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    credentials: true
  }));
app.use(express.json());
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}));



app.get("/", (req, res) => {
    res.send({message: "Hello World"});
});
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/plant', plantRouter);
app.use('/api/task', taskRouter);
app.use('/api/message', messageRouter);
app.use('/api/healthlog', healthLogRouter);

const startServer = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log("Aarchid Api started on http://localhost:8080"));
    } catch (error) {
        console.log(error);
    }
}

startServer();
